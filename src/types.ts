export interface CityData {
  city: string;
  state: string;
  stateName?: string;
}

export interface NicheData {
  id: string;
  label: string;
  category: string; // Geoapify category
  description: string;
  icon: string;
}

export interface Lead {
  id: string;
  name: string;
  niche: string;
  website: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  placeId?: string;
  lat?: number;
  lon?: number;

  // Contact Info Extraction
  foundEmail?: string;
  candidateEmails?: string[];
  emailStatus: 'pending' | 'extracting' | 'found' | 'not_found' | 'manual';
  manualEmail?: string;

  // Microlink Screenshot
  screenshotUrl?: string;
  screenshotStatus: 'pending' | 'capturing' | 'ready' | 'failed';

  // Audit Results (Gemini Vision)
  auditScore?: number; // 0-100
  auditSummary?: string;
  strengths?: string[];
  conversionGaps?: string[];
  uxFlaws?: string[];
  auditStatus: 'pending' | 'auditing' | 'completed' | 'failed';

  // Cold Email Draft
  emailSubject?: string;
  emailBody?: string;
  emailDraftStatus: 'pending' | 'drafting' | 'completed' | 'failed';
}

export type PipelineStep =
  | 'idle'
  | 'scraping'
  | 'extracting'
  | 'capturing'
  | 'auditing'
  | 'drafting'
  | 'completed';

export interface PipelineProgress {
  currentStep: PipelineStep;
  currentLeadIndex: number;
  totalLeads: number;
  statusMessage: string;
}
