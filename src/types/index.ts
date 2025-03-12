export interface GifImage {
  id: string;
  title: string;
  url: string;
  username?: string;
  source?: string;
}

export interface SearchHistory {
  term: string;
  timestamp: number;
  count: number;
}
