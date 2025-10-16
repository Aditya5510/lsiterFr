import { Check, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { QualityIndicator } from "./QualityIndicator";

interface ComparisonViewProps {
  original: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  optimized: {
    title: string;
    description: string;
    bulletPoints: string[];
    keywords: string[];
    improvements: string[];
  };
  productInfo?: {
    imageUrl?: string;
    price?: string;
    rating?: string;
    reviewCount?: string;
  };
}

export function ComparisonView({
  original,
  optimized,
  productInfo,
}: ComparisonViewProps) {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {productInfo && (
        <Card className="border-black/10 shadow-none transition-all duration-300 hover:border-black/20">
          <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {productInfo.imageUrl && (
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={productInfo.imageUrl}
                    alt="Product"
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                  />
                </div>
              )}
              <div className="flex-1 space-y-2 sm:space-y-3">
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                  {productInfo.price && (
                    <Badge
                      variant="secondary"
                      className="bg-black text-white font-medium text-xs"
                    >
                      {productInfo.price}
                    </Badge>
                  )}
                  {productInfo.rating && (
                    <Badge
                      variant="secondary"
                      className="bg-black/5 text-black text-xs"
                    >
                      ⭐ {productInfo.rating}
                    </Badge>
                  )}
                  {productInfo.reviewCount && (
                    <Badge
                      variant="secondary"
                      className="bg-black/5 text-black text-xs"
                    >
                      {productInfo.reviewCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-black/10 shadow-none bg-black text-white overflow-hidden relative">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
            <Sparkles className="h-3 w-3 text-white" />
            <span className="text-xs font-medium text-white">AI Optimized</span>
          </div>
        </div>
        <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            Key Improvements
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <div className="space-y-2 sm:space-y-3">
            {optimized.improvements.map((improvement, index) => (
              <div
                key={index}
                className="flex gap-3 animate-in slide-in-from-left-2 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-white/90">
                  {improvement}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="title" className="w-full">
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-0.5">
            <TabsList className="inline-flex sm:grid sm:w-full sm:grid-cols-4 bg-black/5 p-1 gap-1 w-max sm:w-full">
              <TabsTrigger
                value="title"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium py-2.5 px-8 sm:px-4 whitespace-nowrap transition-all duration-200"
              >
                Title
              </TabsTrigger>
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium py-2.5 px-8 sm:px-4 whitespace-nowrap transition-all duration-200"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="bullets"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium py-2.5 px-8 sm:px-4 whitespace-nowrap transition-all duration-200"
              >
                Bullet Points
              </TabsTrigger>
              <TabsTrigger
                value="keywords"
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-sm text-sm font-medium py-2.5 px-8 sm:px-4 whitespace-nowrap transition-all duration-200"
              >
                Keywords
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent
          value="title"
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <Card className="border-black/10 shadow-none transition-all duration-300 hover:border-black/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <CardTitle className="text-sm sm:text-base font-medium text-black/60">
                Original
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-xs sm:text-sm leading-relaxed text-black/70">
                {original.title}
              </p>
            </CardContent>
          </Card>
          <Card className="border-black shadow-none bg-black/[0.02] transition-all duration-300 hover:border-black/30 animate-in fade-in slide-in-from-bottom-2 duration-500 [animation-delay:100ms]">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                  Optimized
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black/60" />
                </CardTitle>
                <QualityIndicator score={5} size="sm" />
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {optimized.title}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="description"
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <Card className="border-black/10 shadow-none transition-all duration-300 hover:border-black/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <CardTitle className="text-sm sm:text-base font-medium text-black/60">
                Original
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-xs sm:text-sm leading-relaxed text-black/70 whitespace-pre-wrap">
                {original.description}
              </p>
            </CardContent>
          </Card>
          <Card className="border-black shadow-none bg-black/[0.02] transition-all duration-300 hover:border-black/30 animate-in fade-in slide-in-from-bottom-2 duration-500 [animation-delay:100ms]">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                  Optimized
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black/60" />
                </CardTitle>
                <QualityIndicator score={5} size="sm" />
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <p className="text-xs sm:text-sm leading-relaxed font-medium whitespace-pre-wrap">
                {optimized.description}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="bullets"
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <Card className="border-black/10 shadow-none transition-all duration-300 hover:border-black/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <CardTitle className="text-sm sm:text-base font-medium text-black/60">
                Original
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <ul className="space-y-2 sm:space-y-3">
                {original.bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm text-black/70 flex gap-2 sm:gap-3"
                  >
                    <span className="text-black/30 font-bold">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-black shadow-none bg-black/[0.02] transition-all duration-300 hover:border-black/30 animate-in fade-in slide-in-from-bottom-2 duration-500 [animation-delay:100ms]">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                  Optimized
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black/60" />
                </CardTitle>
                <QualityIndicator score={5} size="sm" />
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <ul className="space-y-2 sm:space-y-3">
                {optimized.bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm font-medium flex gap-2 sm:gap-3"
                  >
                    <span className="text-black font-bold">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="keywords"
          className="space-y-3 sm:space-y-4 mt-4 sm:mt-6"
        >
          <Card className="border-black/10 shadow-none transition-all duration-300 hover:border-black/20 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <CardHeader className="pb-2 sm:pb-3 px-4 sm:px-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm sm:text-base font-semibold flex items-center gap-2">
                  SEO Keywords
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black/60" />
                </CardTitle>
                <QualityIndicator score={5} size="sm" />
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {optimized.keywords.map((keyword, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-black text-white font-medium px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs hover:bg-black/90 transition-all duration-200 hover:scale-105 animate-in fade-in zoom-in-50 duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
