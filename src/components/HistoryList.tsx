import { History, Trash2, ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { OptimizationRecord } from "../types";

interface HistoryListProps {
  history: OptimizationRecord[];
  onSelect: (record: OptimizationRecord) => void;
  onDelete: (id: string) => void;
}

export function HistoryList({ history, onSelect, onDelete }: HistoryListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (history.length === 0) {
    return (
      <Card className="border-black/10 shadow-none">
        <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
          <div className="text-center py-8 sm:py-12">
            <History className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-black/20 mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-black/60 font-medium">
              No history yet
            </p>
            <p className="text-xs sm:text-sm text-black/40 mt-1">
              Optimize your first listing
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-black/10 shadow-none">
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-semibold">
          <History className="h-4 w-4 sm:h-5 sm:w-5" />
          History
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3">
          {history.map((record, index) => (
            <div
              key={record.id}
              className="border border-black/10 rounded-lg p-3 sm:p-4 hover:border-black/30 hover:bg-black/[0.02] transition-all duration-200 group animate-in fade-in slide-in-from-bottom-2 touch-manipulation"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Badge
                      variant="outline"
                      className="border-black/20 text-[10px] sm:text-xs font-medium"
                    >
                      {record.asin}
                    </Badge>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-black text-black"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-black/40 hidden sm:inline">
                      {formatDate(record.createdAt)}
                    </span>
                  </div>
                  <h4 className="font-medium text-xs sm:text-sm truncate mb-1.5 sm:mb-2 text-black/90 group-hover:text-black transition-colors">
                    {record.optimizedTitle}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {record.keywords.slice(0, 2).map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-[10px] sm:text-xs bg-black/5 text-black/70 border-0"
                      >
                        {keyword}
                      </Badge>
                    ))}
                    {record.keywords.length > 2 && (
                      <Badge
                        variant="secondary"
                        className="text-[10px] sm:text-xs bg-black/5 text-black/70 border-0"
                      >
                        +{record.keywords.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onSelect(record)}
                    className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-black hover:text-white transition-all duration-200 hover:scale-110 touch-manipulation"
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(record.id)}
                    className="h-7 w-7 sm:h-8 sm:w-8 p-0 hover:bg-black hover:text-white transition-all duration-200 hover:scale-110 touch-manipulation"
                  >
                    <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
