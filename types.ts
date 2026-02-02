
export type PageType = 'landing' | 'checkout' | 'success';

export interface Module {
  id: number;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
