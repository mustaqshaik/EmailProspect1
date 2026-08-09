import React from 'react';
import { Lead } from '../types';
import {
  Users,
  MailCheck,
  Award,
  Download,
  Copy,
  Check,
  Filter,
  Search
} from 'lucide-react';

interface LeadStatsProps {
  leads: Lead[];
  filterStatus: 'all' | 'found' | 'missing';
  onFilterStatusChange: (status: 'all' | 'found' | 'missing') => void;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onExportCSV: () => void;
  onCopyAllEmails: () => void;
  copiedAllEmails: boolean;
}

export const LeadStats: React.FC<LeadStatsProps> = ({
  leads,
  filterStatus,
  onFilterStatusChange,
  searchTerm,
  onSearchTermChange,
  onExportCSV,
  onCopyAllEmails,
  copiedAllEmails
}) => {
  const totalLeads = leads.length;
  const emailsFound = leads.filter((l) => l.manualEmail || l.foundEmail).length;
  const emailRatio = totalLeads > 0 ? Math.round((emailsFound / totalLeads) * 100) : 0;

  const validScores = leads.map((l) => l.auditScore).filter((s): s is number => s !== undefined);
  const avgScore = validScores.length > 0 ? Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length) : 0;

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl p-5 mb-6 space-y-4">
      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-medium text-slate-400">Total Scraped</span>
            <span className="text-lg font-bold text-white font-mono">{totalLeads}</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <MailCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-medium text-slate-400">Contact Extracted</span>
            <span className="text-lg font-bold text-emerald-400 font-mono">
              {emailsFound} <span className="text-xs text-slate-400">({emailRatio}%)</span>
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-medium text-slate-400">Avg Audit Score</span>
            <span className="text-lg font-bold text-amber-400 font-mono">{avgScore}/100</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center space-x-3">
          <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Filter className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-medium text-slate-400">Outreach Ready</span>
            <span className="text-lg font-bold text-cyan-400 font-mono">
              {leads.filter((l) => (l.manualEmail || l.foundEmail) && l.emailSubject).length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Bulk Action Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
        {/* Search & Filter */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-56">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchTermChange(e.target.value)}
              placeholder="Filter leads by name or city..."
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl pl-8 pr-3 py-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => onFilterStatusChange('all')}
              className={`px-3 py-1 rounded-lg transition ${
                filterStatus === 'all'
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({totalLeads})
            </button>
            <button
              onClick={() => onFilterStatusChange('found')}
              className={`px-3 py-1 rounded-lg transition ${
                filterStatus === 'found'
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Has Email ({emailsFound})
            </button>
            <button
              onClick={() => onFilterStatusChange('missing')}
              className={`px-3 py-1 rounded-lg transition ${
                filterStatus === 'missing'
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Needs Email ({totalLeads - emailsFound})
            </button>
          </div>
        </div>

        {/* Bulk Export Actions */}
        <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
          <button
            onClick={onCopyAllEmails}
            disabled={emailsFound === 0}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700/80 transition flex items-center space-x-1.5 disabled:opacity-50"
          >
            {copiedAllEmails ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied Emails!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy All Emails</span>
              </>
            )}
          </button>

          <button
            onClick={onExportCSV}
            disabled={totalLeads === 0}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-950/50 transition flex items-center space-x-1.5 disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
