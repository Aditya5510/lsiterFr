export interface ProductData {
  asin: string;
  title: string;
  description: string;
  bulletPoints: string[];
  price?: string;
  rating?: string;
  reviewCount?: string;
  imageUrl?: string;
  category?: string;
}

export interface OptimizedContent {
  title: string;
  description: string;
  bulletPoints: string[];
  keywords: string[];
  improvements: string[];
}

export interface OptimizationRecord {
  id: string;
  asin: string;
  originalTitle: string;
  originalDescription: string;
  originalBulletPoints: string[];
  optimizedTitle: string;
  optimizedDescription: string;
  optimizedBulletPoints: string[];
  keywords: string[];
  improvements: string[];
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
