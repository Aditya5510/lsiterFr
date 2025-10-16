import { Card, CardContent, CardHeader } from "./ui/card";

export function ComparisonSkeleton() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      <Card className="border-black/10 shadow-none">
        <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-black/5 animate-pulse rounded mx-auto sm:mx-0" />
            <div className="flex-1 space-y-2 sm:space-y-3">
              <div className="flex gap-1.5 sm:gap-2 justify-center sm:justify-start">
                <div className="h-5 sm:h-6 w-16 sm:w-20 bg-black/5 animate-pulse rounded" />
                <div className="h-5 sm:h-6 w-20 sm:w-24 bg-black/5 animate-pulse rounded" />
                <div className="h-5 sm:h-6 w-24 sm:w-28 bg-black/5 animate-pulse rounded" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-black/10 shadow-none bg-black">
        <CardHeader className="px-4 sm:px-6">
          <div className="h-5 sm:h-6 w-40 sm:w-48 bg-white/10 animate-pulse rounded" />
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <div className="space-y-2 sm:space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-2 sm:gap-3">
                <div className="h-4 sm:h-5 w-4 sm:w-5 bg-white/10 animate-pulse rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="h-3 sm:h-4 bg-white/10 animate-pulse rounded w-full" />
                  <div className="h-3 sm:h-4 bg-white/10 animate-pulse rounded w-2/3 sm:w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-black/10 shadow-none">
        <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 sm:h-10 bg-black/5 animate-pulse rounded"
                />
              ))}
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="h-24 sm:h-32 bg-black/5 animate-pulse rounded" />
              <div className="h-24 sm:h-32 bg-black/5 animate-pulse rounded" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function HistorySkeleton() {
  return (
    <Card className="border-black/10 shadow-none">
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
        <div className="h-5 sm:h-6 w-28 sm:w-32 bg-black/5 animate-pulse rounded" />
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-black/10 rounded-lg p-3 sm:p-4"
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="h-4 sm:h-5 w-20 sm:w-24 bg-black/5 animate-pulse rounded" />
                    <div className="h-4 sm:h-5 w-24 sm:w-32 bg-black/5 animate-pulse rounded" />
                  </div>
                  <div className="h-3 sm:h-4 bg-black/5 animate-pulse rounded w-full" />
                  <div className="flex gap-1">
                    <div className="h-4 sm:h-5 w-14 sm:w-16 bg-black/5 animate-pulse rounded" />
                    <div className="h-4 sm:h-5 w-14 sm:w-16 bg-black/5 animate-pulse rounded" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
