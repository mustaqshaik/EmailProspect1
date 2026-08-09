import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchSection } from './components/SearchSection';
import { PipelineProgressBar } from './components/PipelineProgressBar';
import { LeadCard } from './components/LeadCard';
import { LeadStats } from './components/LeadStats';
import { Lead, PipelineProgress } from './types';
import { Compass, Sparkles, Inbox, RefreshCw, Layers } from 'lucide-react';

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<PipelineProgress>({
    currentStep: 'idle',
    currentLeadIndex: 0,
    totalLeads: 0,
    statusMessage: '',
  });

  const [filterStatus, setFilterStatus] = useState<'all' | 'found' | 'missing'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedAllEmails, setCopiedAllEmails] = useState<boolean>(false);

  // Main Lead Scraping & Processing Pipeline
  const handleSearchLeads = async (
    niche: string,
    city: string,
    state: string,
    limit: number
  ) => {
    setIsLoading(true);
    setLeads([]);
    setProgress({
      currentStep: 'scraping',
      currentLeadIndex: 0,
      totalLeads: limit,
      statusMessage: `1/5 Querying Geoapify for local ${niche} businesses in ${city}, ${state}...`,
    });

    try {
      // Step 1: Scrape Leads via Backend API
      const searchRes = await fetch('/api/leads/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, city, state, limit }),
      });

      if (!searchRes.ok) {
        throw new Error(`Search endpoint returned status ${searchRes.status}`);
      }

      const searchData = await searchRes.json();
      const rawLeads: Lead[] = searchData.leads || [];

      if (rawLeads.length === 0) {
        setProgress({
          currentStep: 'idle',
          currentLeadIndex: 0,
          totalLeads: 0,
          statusMessage: 'No leads found for this niche and location.',
        });
        setIsLoading(false);
        return;
      }

      setLeads(rawLeads);
      const total = rawLeads.length;

      // Sequential Processing of Leads
      const processedLeads: Lead[] = [...rawLeads];

      for (let i = 0; i < total; i++) {
        const lead = processedLeads[i];

        // Step 2: Extract Contact Email
        setProgress({
          currentStep: 'extracting',
          currentLeadIndex: i + 1,
          totalLeads: total,
          statusMessage: `[${i + 1}/${total}] Extracting emails for "${lead.name}"...`,
        });

        try {
          const emailRes = await fetch('/api/leads/extract-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ website: lead.website }),
          });
          if (emailRes.ok) {
            const emailData = await emailRes.json();
            lead.foundEmail = emailData.foundEmail || '';
            lead.candidateEmails = emailData.candidateEmails || [];
            lead.emailStatus = emailData.foundEmail ? 'found' : 'not_found';
            lead.manualEmail = emailData.foundEmail || '';
          } else {
            lead.emailStatus = 'not_found';
          }
        } catch (e) {
          lead.emailStatus = 'not_found';
        }

        setLeads([...processedLeads]);

        // Step 3: Capture Microlink Screenshot
        setProgress({
          currentStep: 'capturing',
          currentLeadIndex: i + 1,
          totalLeads: total,
          statusMessage: `[${i + 1}/${total}] Capturing website screenshot for "${lead.name}"...`,
        });

        const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(lead.website)}&screenshot=true&embed=screenshot.url`;
        lead.screenshotUrl = screenshotUrl;
        lead.screenshotStatus = 'ready';

        setLeads([...processedLeads]);

        // Step 4 & 5: AI Vision Audit & Draft Cold Email
        setProgress({
          currentStep: 'auditing',
          currentLeadIndex: i + 1,
          totalLeads: total,
          statusMessage: `[${i + 1}/${total}] Running Gemini Vision AI audit & drafting cold email...`,
        });

        try {
          const auditRes = await fetch('/api/leads/audit-and-draft', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: lead.name,
              niche: lead.niche,
              website: lead.website,
              city: lead.city,
              state: lead.state,
              screenshotUrl: lead.screenshotUrl,
            }),
          });

          if (auditRes.ok) {
            const auditData = await auditRes.json();
            lead.auditScore = auditData.auditScore;
            lead.auditSummary = auditData.auditSummary;
            lead.strengths = auditData.strengths;
            lead.conversionGaps = auditData.conversionGaps;
            lead.uxFlaws = auditData.uxFlaws;
            lead.auditStatus = 'completed';

            lead.emailSubject = auditData.subject;
            lead.emailBody = auditData.emailBody;
            lead.emailDraftStatus = 'completed';
          } else {
            lead.auditStatus = 'failed';
            lead.emailDraftStatus = 'failed';
          }
        } catch (e) {
          lead.auditStatus = 'failed';
          lead.emailDraftStatus = 'failed';
        }

        setLeads([...processedLeads]);

        // Pacing pause to prevent hitting API rate limits
        if (i < total - 1) {
          await new Promise((r) => setTimeout(r, 600));
        }
      }

      setProgress({
        currentStep: 'completed',
        currentLeadIndex: total,
        totalLeads: total,
        statusMessage: `Successfully processed ${total} local leads with website audits and cold emails.`,
      });
    } catch (err: any) {
      console.error('Error running pipeline:', err);
      setProgress({
        currentStep: 'idle',
        currentLeadIndex: 0,
        totalLeads: 0,
        statusMessage: 'Pipeline error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Update lead callback
  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === updatedLead.id ? updatedLead : l))
    );
  };

  // Regenerate draft callback
  const handleRegenerateDraft = async (leadToRegen: Lead) => {
    try {
      const res = await fetch('/api/leads/audit-and-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadToRegen.name,
          niche: leadToRegen.niche,
          website: leadToRegen.website,
          city: leadToRegen.city,
          state: leadToRegen.state,
          screenshotUrl: leadToRegen.screenshotUrl,
        }),
      });
      const data = await res.json();
      handleUpdateLead({
        ...leadToRegen,
        auditScore: data.auditScore,
        auditSummary: data.auditSummary,
        strengths: data.strengths,
        conversionGaps: data.conversionGaps,
        uxFlaws: data.uxFlaws,
        emailSubject: data.subject,
        emailBody: data.emailBody,
      });
    } catch (e) {
      console.error('Failed to regenerate draft:', e);
    }
  };

  // CSV Export
  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = [
      'Business Name',
      'Niche',
      'City',
      'State',
      'Website',
      'Phone',
      'Target Email',
      'Audit Score',
      'Email Subject',
      'Email Body',
    ];

    const rows = leads.map((l) => [
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.niche || '').replace(/"/g, '""')}"`,
      `"${(l.city || '').replace(/"/g, '""')}"`,
      `"${(l.state || '').replace(/"/g, '""')}"`,
      `"${(l.website || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.manualEmail || l.foundEmail || '').replace(/"/g, '""')}"`,
      `"${l.auditScore || ''}"`,
      `"${(l.emailSubject || '').replace(/"/g, '""')}"`,
      `"${(l.emailBody || '').replace(/\n/g, ' ').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `ProspectPilot_Leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Bulk copy all emails
  const handleCopyAllEmails = () => {
    const validEmails = leads
      .map((l) => l.manualEmail || l.foundEmail)
      .filter((e): e is string => Boolean(e));

    if (validEmails.length === 0) return;

    navigator.clipboard.writeText(validEmails.join(', '));
    setCopiedAllEmails(true);
    setTimeout(() => setCopiedAllEmails(false), 2500);
  };

  // Filtering leads list
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.website.toLowerCase().includes(searchTerm.toLowerCase());

    const hasEmail = Boolean(lead.manualEmail || lead.foundEmail);

    if (filterStatus === 'found' && !hasEmail) return false;
    if (filterStatus === 'missing' && hasEmail) return false;

    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Lead Config Section */}
        <SearchSection onSearch={handleSearchLeads} isLoading={isLoading} />

        {/* Pipeline Progress Bar */}
        {(isLoading || progress.currentStep !== 'idle') && (
          <PipelineProgressBar progress={progress} />
        )}

        {/* Lead Metrics & Filters (when leads exist) */}
        {leads.length > 0 && (
          <LeadStats
            leads={leads}
            filterStatus={filterStatus}
            onFilterStatusChange={setFilterStatus}
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onExportCSV={handleExportCSV}
            onCopyAllEmails={handleCopyAllEmails}
            copiedAllEmails={copiedAllEmails}
          />
        )}

        {/* Results Feed */}
        {filteredLeads.length > 0 ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span className="flex items-center space-x-1.5 font-medium">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Showing {filteredLeads.length} of {leads.length} leads</span>
              </span>
              <span>Sequence: Observation &rarr; Insight &rarr; Gap</span>
            </div>

            {filteredLeads.map((lead, idx) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                index={idx}
                onUpdateLead={handleUpdateLead}
                onRegenerateDraft={handleRegenerateDraft}
              />
            ))}
          </div>
        ) : !isLoading && leads.length === 0 ? (
          /* Empty State Hero Card */
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 text-center max-w-2xl mx-auto my-12 space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
              <Compass className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white">Ready to Scrape &amp; Audit Local Prospects</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Select a target industry niche and major US city above. ProspectPilot will locate active business websites, extract decision-maker emails, capture live site screenshots, and run Gemini Vision audits to generate conversion-driven cold emails.
            </p>
            <div className="pt-2 flex justify-center gap-3 text-xs text-slate-500 font-mono">
              <span>• Geoapify API</span>
              <span>• Gemini Vision AI</span>
              <span>• Microlink Screenshots</span>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
