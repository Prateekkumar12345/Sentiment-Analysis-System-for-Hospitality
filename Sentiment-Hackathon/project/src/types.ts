export interface SentimentData {
  department: string;
  sentiment: number;
  reviewCount: number;
  recommendations: string[];
}

export interface MonthlyTrend {
  month: string;
  sentiment: number;
  reviewCount: number;
}

export interface DepartmentMetrics {
  name: string;
  score: number;
  reviews: number;
  change: number;
}

export interface FraudDetection {
  total: number;
  aiGenerated: number;
  genuine: number;
}