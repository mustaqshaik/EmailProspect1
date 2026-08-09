import React from 'react';
import { PipelineProgress } from '../types';
import { Database, Mail, Camera, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface PipelineProgressBarProps {
  progress: PipelineProgress;
}

export const PipelineProgressBar: React.FC<PipelineProgressBarProps> = ({ progress }) => {
  const steps = [
    { id: 'scraping', label: '1. Scraping Leads', icon: Database, color: 'text-indigo-400' },
    { id: 'extracting', label: '2. Contact Extract', icon: Mail, color: 'text-emerald-400' },
    { id: 'capturing', label: '3. Screenshotting', icon: Camera, color: 'text-cyan-400' },
    { id: 'auditing', label: '4. AI Vision Audit', icon: Sparkles, color: 'text-amber-400' },
    { id: 'drafting', label: '5. Cold Email Draft', icon: FileText, color: 'text-purple-400' },
  ];

  const getStepIndex = (stepId: string) => {
    switch (stepId) {
      case 'scraping': return 0;
      case 'extracting': return 1;
      case 'capturing': return 2;
      case 'auditing': return 3;
      case 'drafting': return 4;
      case 'completed': return 5;
      default: return 0;
    }
  };

  const currentIndex = getStepIndex(progress.currentStep);
  const percentage = Math.round((currentIndex / steps.length) * 100);

  return (
    <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-5 mb-8 shadow-xl shadow-indigo-950/20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Autonomous Pipeline Active
            </h3>
          </div>
          <p className="text-xs text-slate-300 mt-0.5 font-medium">
            {progress.statusMessage || 'Processing leads through multi-stage AI engine...'}
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="text-slate-400">
            Lead {progress.currentLeadIndex} of {progress.totalLeads}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold font-mono">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden mb-5 border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-500 ease-out rounded-full shadow-lg shadow-indigo-500/50"
          style={{ width: `${Math.max(percentage, 5)}%` }}
        />
      </div>

      {/* Pipeline Steps Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx < currentIndex;
          const isCurrent = idx === currentIndex;

          return (
            <div
              key={step.id}
              className={`p-2.5 rounded-xl border transition-all flex flex-col items-start justify-between ${
                isCurrent
                  ? 'bg-indigo-950/60 border-indigo-500/60 text-white shadow-md shadow-indigo-500/10'
                  : isDone
                  ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                  : 'bg-slate-950/30 border-slate-800/40 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon className={`w-4 h-4 ${isCurrent ? 'animate-bounce text-indigo-400' : isDone ? 'text-emerald-400' : 'text-slate-600'}`} />
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : isCurrent ? (
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                ) : null}
              </div>
              <span className={`text-[11px] font-medium tracking-tight ${isCurrent ? 'text-indigo-200 font-semibold' : 'text-slate-400'}`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
