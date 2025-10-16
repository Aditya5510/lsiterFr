import { useState, useEffect } from "react";
import { AsinInput } from "./components/AsinInput";
import { ComparisonView } from "./components/ComparisonView";
import { HistoryList } from "./components/HistoryList";
import { ErrorAlert } from "./components/ErrorAlert";
import {
  ComparisonSkeleton,
  HistorySkeleton,
} from "./components/SkeletonLoader";
import { apiService } from "./services/api";
import type { OptimizationRecord } from "./types";
import { Package, CheckCircle2, Star } from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [currentOptimization, setCurrentOptimization] = useState<any | null>(
    null
  );
  const [history, setHistory] = useState<OptimizationRecord[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    setIsHistoryLoading(true);
    try {
      const response = await apiService.getHistory();
      if (response.success && response.data) {
        setHistory(response.data);
      }
    } finally {
      setIsHistoryLoading(false);
    }
  };

  const handleOptimize = async (asin: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    setCurrentOptimization(null);

    try {
      const response = await apiService.optimizeProduct(asin);

      if (response.success && response.data) {
        setCurrentOptimization(response.data);
        setSuccess(true);
        await loadHistory();

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(response.error || "Failed to optimize product");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHistory = (record: OptimizationRecord) => {
    setCurrentOptimization({
      optimization: record,
      productData: {},
    });
  };

  const handleDeleteHistory = async (id: string) => {
    const response = await apiService.deleteOptimization(id);
    if (response.success) {
      await loadHistory();
      if (currentOptimization?.optimization?.id === id) {
        setCurrentOptimization(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-black/10 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 max-w-7xl">
          <header>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-black rounded">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-black">
                    Listing Optimizer
                  </h1>
                  <p className="text-xs sm:text-sm text-black/60 hidden sm:block">
                    AI-powered product optimization
                  </p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 max-w-7xl">
        {error && (
          <div className="mb-6 animate-in slide-in-from-top-2 duration-300">
            <ErrorAlert error={error} onDismiss={() => setError(null)} />
          </div>
        )}

        {success && (
          <div className="mb-4 sm:mb-6 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-black text-white border-black rounded-lg p-3 sm:p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">
                  Product listing optimized successfully!
                </p>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-white text-white"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            <AsinInput onOptimize={handleOptimize} isLoading={isLoading} />

            {isLoading && <ComparisonSkeleton />}

            {!isLoading && currentOptimization && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ComparisonView
                  original={{
                    title: currentOptimization.optimization.originalTitle,
                    description:
                      currentOptimization.optimization.originalDescription,
                    bulletPoints:
                      currentOptimization.optimization.originalBulletPoints,
                  }}
                  optimized={{
                    title: currentOptimization.optimization.optimizedTitle,
                    description:
                      currentOptimization.optimization.optimizedDescription,
                    bulletPoints:
                      currentOptimization.optimization.optimizedBulletPoints,
                    keywords: currentOptimization.optimization.keywords,
                    improvements: currentOptimization.optimization.improvements,
                  }}
                  productInfo={currentOptimization.productData}
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            {isHistoryLoading ? (
              <HistorySkeleton />
            ) : (
              <HistoryList
                history={history}
                onSelect={handleSelectHistory}
                onDelete={handleDeleteHistory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
