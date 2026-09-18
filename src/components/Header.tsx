import React, { useState } from 'react';
import { Compass, Sparkles, Database, HelpCircle, X, ShieldCheck, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <>
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-indigo-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-tight text-white font-sans">
                  ProspectPilot
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  v2.0 Engine
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Local Lead Scraper • AI Website Auditor • Cold Email Generator
              </p>
            </div>
          </div>

          {/* Integration Status Badges & Info */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 bg-slate-800/80 rounded-lg px-3 py-1.5 border border-slate-700/50 text-xs">
              <div className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-300">Gemini 3.6 Flash</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center space-x-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">Geoapify Scraper</span>
              </div>
            </div>

            <button
              onClick={() => setShowDocs(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-medium transition-all"
            >
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>How it Works</span>
            </button>
          </div>
        </div>
      </header>

      {/* Workflow Documentation Modal */}
      {showDocs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative text-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowDocs(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">ProspectPilot Architecture</h3>
                <p className="text-xs text-slate-400">One-Shot Hyper-Personalized Outreach Engine Blueprint</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <h4 className="font-semibold text-indigo-300 flex items-center space-x-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>1. Local Lead Scraping (Geoapify)</span>
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Queries Geoapify Geocoding to resolve your target Indian City & State / UT into a precise geographical Place ID. Fetches active local businesses filtered by niche categories and enforces valid HTTP website domains.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <h4 className="font-semibold text-emerald-300 flex items-center space-x-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>2. Resilience Email Extraction</span>
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Sequentially crawls candidate subpages (<code className="text-indigo-300">/contact</code>, <code className="text-indigo-300">/about-us</code>, <code className="text-indigo-300">/team</code>, homepage) with 500-status tolerance, strips junk addresses, and applies smart sorting to rank personal team emails first.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
                <h4 className="font-semibold text-cyan-300 flex items-center space-x-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>3. Vision AI Audit & Cold Copy (Gemini)</span>
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Captures live site screenshots via Microlink and passes the visual canvas to <strong>Gemini 3.6 Flash Vision</strong>. Generates an objective 0-100 audit score, conversion flaw analysis, and drafts a cold email following the strict <strong>"Observation -&gt; Insight -&gt; Gap"</strong> framework.
                </p>
              </div>

              <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-500/20 text-xs text-indigo-200">
                <strong>Copywriting Guarantee:</strong> Zero flattery, no "I hope you're well", hyper-focused 2-4 word lowercase subject line, and a 2-minute video hook.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDocs(false)}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition"
              >
                Got it, let’s find leads
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
