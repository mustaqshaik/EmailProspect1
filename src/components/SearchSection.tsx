import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Sliders, Sparkles, Building2, Lock } from 'lucide-react';
import { NICHES } from '../data/niches';
import { INDIAN_CITIES } from '../data/indianCities';

interface SearchSectionProps {
  onSearch: (niche: string, city: string, state: string, limit: number) => void;
  isLoading: boolean;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSearch, isLoading }) => {
  const [selectedNiche, setSelectedNiche] = useState<string>(NICHES[0].id);
  const [selectedCity, setSelectedCity] = useState<string>(INDIAN_CITIES[0].city);
  const [stateValue, setStateValue] = useState<string>(INDIAN_CITIES[0].state);
  const [maxLeads, setMaxLeads] = useState<number>(5);
  const [citySearchTerm, setCitySearchTerm] = useState<string>('');

  // Automatically update State when City changes and lock it
  useEffect(() => {
    const matched = INDIAN_CITIES.find(
      (c) => c.city.toLowerCase() === selectedCity.toLowerCase()
    );
    if (matched) {
      setStateValue(matched.state);
    }
  }, [selectedCity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNiche || !selectedCity || !stateValue) return;
    onSearch(selectedNiche, selectedCity, stateValue, maxLeads);
  };

  const filteredCities = INDIAN_CITIES.filter((c) =>
    `${c.city}, ${c.state}, ${c.stateName || ''}`.toLowerCase().includes(citySearchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-900 border border-white/5 rounded-2xl p-5 sm:p-6 shadow-2xl shadow-slate-950/50 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Search className="w-5 h-5 text-indigo-400" />
            <span>Find &amp; Pilot Local Leads</span>
          </h2>
          <p className="text-xs text-slate-400">
            Select an industry niche and Indian target city to initiate scraping, AI website auditing, and outreach generation.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Full Pipeline Mode</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Niche Selection */}
          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>Target Niche / Industry</span>
            </label>
            <div className="relative">
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                disabled={isLoading}
                className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-50"
              >
                {NICHES.map((niche) => (
                  <option key={niche.id} value={niche.id}>
                    {niche.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* City Dropdown */}
          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Indian City (80+ Major Markets &amp; Capitals)</span>
            </label>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={isLoading}
                className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-50"
              >
                {INDIAN_CITIES.map((c) => (
                  <option key={`${c.city}-${c.state}`} value={c.city}>
                    {c.city}, {c.state} ({c.stateName})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* State Input (Readonly / Disabled as required) */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>State / UT (Auto-Set)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={stateValue}
                readOnly
                disabled
                className="w-full bg-slate-950/80 border border-slate-800 text-slate-400 rounded-xl px-3.5 py-2.5 text-sm font-mono focus:outline-none cursor-not-allowed select-none"
              />
              <Lock className="w-3.5 h-3.5 text-slate-600 absolute right-3 top-3" />
            </div>
          </div>

          {/* Max Leads Limit */}
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <span>Lead Limit</span>
            </label>
            <select
              value={maxLeads}
              onChange={(e) => setMaxLeads(Number(e.target.value))}
              disabled={isLoading}
              className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition appearance-none cursor-pointer disabled:opacity-50"
            >
              <option value={3}>3 Leads (Fast Test)</option>
              <option value={5}>5 Leads (Standard)</option>
              <option value={8}>8 Leads (Deep Batch)</option>
              <option value={10}>10 Leads (Full Run)</option>
            </select>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-3">
          <div className="text-xs text-slate-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>Targeting <strong className="text-slate-200">{selectedNiche}</strong> in <strong className="text-slate-200">{selectedCity}, {stateValue}</strong></span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Running Pipeline...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Scrape &amp; Audit Leads</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
