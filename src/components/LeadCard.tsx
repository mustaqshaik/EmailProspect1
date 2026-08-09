import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lead } from '../types';
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Phone,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Send,
  RefreshCw,
  Eye,
  Edit3
} from 'lucide-react';

interface LeadCardProps {
  lead: Lead;
  index: number;
  onUpdateLead: (updatedLead: Lead) => void;
  onRegenerateDraft?: (lead: Lead) => void;
}

export const LeadCard: React.FC<LeadCardProps> = ({
  lead,
  index,
  onUpdateLead,
  onRegenerateDraft
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'email'>('audit');
  const [manualEmailInput, setManualEmailInput] = useState<string>(
    lead.manualEmail || lead.foundEmail || ''
  );
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);
  const [isEditingSubject, setIsEditingSubject] = useState(false);
  const [editedSubject, setEditedSubject] = useState(lead.emailSubject || '');
  const [isEditingBody, setIsEditingBody] = useState(false);
  const [editedBody, setEditedBody] = useState(lead.emailBody || '');

  // Spec Rule: "In the UI, if foundEmail exists but the manualEmail state is empty (e.g. user deleted it), a useEffect should re-populate it automatically."
  useEffect(() => {
    if (lead.foundEmail && !manualEmailInput) {
      setManualEmailInput(lead.foundEmail);
      onUpdateLead({
        ...lead,
        manualEmail: lead.foundEmail
      });
    }
  }, [lead.foundEmail, manualEmailInput]);

  useEffect(() => {
    if (lead.emailSubject) setEditedSubject(lead.emailSubject);
    if (lead.emailBody) setEditedBody(lead.emailBody);
  }, [lead.emailSubject, lead.emailBody]);

  const handleEmailChange = (val: string) => {
    setManualEmailInput(val);
    onUpdateLead({
      ...lead,
      manualEmail: val,
      foundEmail: val || lead.foundEmail
    });
  };

  const effectiveEmail = manualEmailInput || lead.foundEmail || '';

  const getScoreColor = (score?: number) => {
    if (score === undefined) return 'bg-slate-800 text-slate-400 border-slate-700';
    if (score > 75) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (score >= 50) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
  };

  const getScoreBadgeText = (score?: number) => {
    if (score === undefined) return 'Auditing...';
    if (score > 75) return 'High Quality Site';
    if (score >= 50) return 'Moderate Optimization Gaps';
    return 'Critical Conversion Gaps';
  };

  const handleCopy = (text: string, type: 'email' | 'subject' | 'body') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'subject') {
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    } else if (type === 'body') {
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    }
  };

  const handleMailTo = () => {
    const subject = encodeURIComponent(editedSubject || lead.emailSubject || '');
    const body = encodeURIComponent(editedBody || lead.emailBody || '');
    const recipient = encodeURIComponent(effectiveEmail);
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-slate-900 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-5 shadow-xl transition-all mb-6 relative group overflow-hidden"
    >
      {/* Subtle Card Glow */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-2xl" />

      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center space-x-3 flex-wrap gap-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {lead.name}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              {lead.niche}
            </span>
            <a
              href={lead.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-indigo-400 hover:text-indigo-300 underline font-mono"
            >
              <span>{lead.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center space-x-4 text-xs text-slate-400 flex-wrap">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{lead.address || `${lead.city}, ${lead.state}`}</span>
            </span>
            {lead.phone && (
              <span className="flex items-center space-x-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{lead.phone}</span>
              </span>
            )}
          </div>
        </div>

        {/* Audit Score Badge */}
        <div className="flex items-center space-x-3">
          <div className={`px-3.5 py-1.5 rounded-xl border font-mono text-sm font-bold flex items-center space-x-2 ${getScoreColor(lead.auditScore)}`}>
            <Sparkles className="w-4 h-4" />
            <span>Audit Score: {lead.auditScore !== undefined ? `${lead.auditScore}/100` : '--'}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Screenshot & Contact Info, Right Tabbed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Website Screenshot & Contact Section (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Screenshot Container */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group/img aspect-video sm:aspect-auto sm:h-44 flex flex-col justify-between">
            <img
              src={
                lead.screenshotUrl ||
                `https://api.microlink.io/?url=${encodeURIComponent(lead.website)}&screenshot=true&embed=screenshot.url`
              }
              alt={`${lead.name} website preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              onError={(e) => {
                // Fallback image placeholder
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-300 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
              <span className="truncate font-mono">{lead.website}</span>
              <a
                href={lead.website}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 ml-1"
              >
                <Eye className="w-3 h-3" />
                <span>Inspect</span>
              </a>
            </div>
          </div>

          {/* Email Contact Box */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300 flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Target Email Address</span>
              </span>
              {effectiveEmail ? (
                <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Found</span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1 text-[11px] text-amber-400 font-medium">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Email needed</span>
                </span>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="email"
                value={manualEmailInput}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="Enter or edit target email..."
                className="w-full bg-slate-900 border border-slate-800 text-slate-100 text-xs rounded-lg px-3 py-2 font-mono focus:outline-none focus:border-indigo-500 transition"
              />
              {effectiveEmail && (
                <button
                  onClick={() => handleCopy(effectiveEmail, 'email')}
                  title="Copy Email"
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition border border-slate-700/60"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Content (Audit Detail vs Cold Email) (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            {/* Tab Navigation */}
            <div className="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-4">
              <button
                onClick={() => setActiveTab('audit')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
                  activeTab === 'audit'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audit Detail</span>
              </button>

              <button
                onClick={() => setActiveTab('email')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
                  activeTab === 'email'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Cold Email Draft</span>
              </button>
            </div>

            {/* Tab 1: Audit Detail */}
            {activeTab === 'audit' && (
              <div className="space-y-4 text-xs animate-in fade-in duration-200">
                {/* Executive Summary */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="text-slate-400 font-semibold mb-1 uppercase text-[10px] tracking-wider">
                    Executive Audit Findings
                  </h4>
                  <p className="text-slate-200 leading-relaxed font-sans">
                    {lead.auditSummary || 'Analyzing conversion elements, visual hierarchy, and CTA placement...'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Strengths */}
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <h5 className="font-semibold text-emerald-400 flex items-center space-x-1.5 mb-2">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Strengths</span>
                    </h5>
                    <ul className="space-y-1 text-slate-300 text-[11px]">
                      {(lead.strengths || ['Branding clearly visible', 'Service offerings listed']).map((s, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-emerald-400">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conversion Gaps */}
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <h5 className="font-semibold text-amber-400 flex items-center space-x-1.5 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Conversion Gaps</span>
                    </h5>
                    <ul className="space-y-1 text-slate-300 text-[11px]">
                      {(lead.conversionGaps || ['Missing primary CTA above fold', 'Slow mobile form flow']).map((g, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-amber-400">•</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* UX Flaws */}
                {lead.uxFlaws && lead.uxFlaws.length > 0 && (
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20">
                    <h5 className="font-semibold text-rose-400 flex items-center space-x-1.5 mb-2">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>UX &amp; Design Flaws</span>
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-slate-300 text-[11px]">
                      {lead.uxFlaws.map((f, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-rose-400">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Cold Email Draft */}
            {activeTab === 'email' && (
              <div className="space-y-3 text-xs animate-in fade-in duration-200">
                {/* To Email Field */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400 font-medium text-[11px] w-16">To:</span>
                  <input
                    type="email"
                    value={effectiveEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="Recipient email address..."
                    className="w-full bg-transparent text-slate-200 text-xs font-mono focus:outline-none"
                  />
                </div>

                {/* Subject Line */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium text-[11px]">
                      Subject (2-4 words, lowercase, specific):
                    </span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setIsEditingSubject(!isEditingSubject)}
                        className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleCopy(editedSubject || lead.emailSubject || '', 'subject')}
                        className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                      >
                        {copiedSubject ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>

                  {isEditingSubject ? (
                    <input
                      type="text"
                      value={editedSubject}
                      onChange={(e) => setEditedSubject(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-xs px-2 py-1 rounded font-mono focus:outline-none"
                    />
                  ) : (
                    <p className="text-indigo-300 font-mono font-medium text-xs">
                      {editedSubject || lead.emailSubject || 'your hero section layout'}
                    </p>
                  )}
                </div>

                {/* Email Body */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                    <span className="text-slate-400 font-medium text-[11px]">
                      Framework: Observation &rarr; Insight &rarr; Gap
                    </span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setIsEditingBody(!isEditingBody)}
                        className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                        title="Edit Body"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => handleCopy(editedBody || lead.emailBody || '', 'body')}
                        className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition"
                        title="Copy Body"
                      >
                        {copiedBody ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>

                  {isEditingBody ? (
                    <textarea
                      rows={6}
                      value={editedBody}
                      onChange={(e) => setEditedBody(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-xs p-2 rounded font-mono focus:outline-none leading-relaxed resize-y"
                    />
                  ) : (
                    <div className="text-slate-200 whitespace-pre-wrap font-sans text-xs leading-relaxed">
                      {editedBody || lead.emailBody}
                    </div>
                  )}
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onRegenerateDraft && onRegenerateDraft(lead)}
                    className="flex items-center space-x-1 text-[11px] text-slate-400 hover:text-indigo-300 transition"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Regenerate Draft</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleCopy(`${editedSubject}\n\n${editedBody}`, 'body')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition flex items-center space-x-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Full Email</span>
                    </button>

                    <button
                      onClick={handleMailTo}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition flex items-center space-x-1"
                    >
                      <Send className="w-3 h-3" />
                      <span>Send in Mail App</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
