import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface AsinInputProps {
  onOptimize: (asin: string) => Promise<void>;
  isLoading: boolean;
}

export function AsinInput({ onOptimize, isLoading }: AsinInputProps) {
  const [asin, setAsin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const cleanAsin = asin.trim().toUpperCase();

    if (!cleanAsin) {
      setError("Please enter an ASIN");
      return;
    }

    if (!/^[A-Z0-9]{10}$/.test(cleanAsin)) {
      setError("ASIN must be 10 alphanumeric characters");
      return;
    }

    await onOptimize(cleanAsin);
  };

  return (
    <Card className="w-full border-black/10 shadow-none transition-all duration-300 hover:border-black/20">
      <CardHeader className="space-y-1 pb-3 sm:pb-4 px-4 sm:px-6">
        <CardTitle className="text-lg sm:text-xl font-semibold tracking-tight">
          Optimize Product Listing
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-black/60">
          Enter an Amazon ASIN to generate AI-powered optimizations
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <div className="space-y-2">
            <Label htmlFor="asin" className="text-xs sm:text-sm font-medium">
              Amazon ASIN
            </Label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 group">
                <Input
                  id="asin"
                  type="text"
                  placeholder="B07ZPKN6YR"
                  value={asin}
                  onChange={(e) => setAsin(e.target.value)}
                  disabled={isLoading}
                  className="border-black/20 focus:border-black transition-all duration-200 group-hover:border-black/30 h-10 sm:h-9 text-base sm:text-sm"
                  maxLength={10}
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  </div>
                )}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto h-10 sm:h-9 bg-black hover:bg-black/90 text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className="hidden xs:inline">Analyzing...</span>
                    <span className="xs:hidden">Processing</span>
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Optimize
                  </>
                )}
              </Button>
            </div>
            {error && (
              <p className="text-sm text-black font-medium animate-in slide-in-from-top-1 duration-300">
                {error}
              </p>
            )}
            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-black/60 animate-in fade-in duration-500">
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 bg-black/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="h-1.5 w-1.5 bg-black/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="h-1.5 w-1.5 bg-black/40 rounded-full animate-bounce" />
                </div>
                <span>Fetching product data and optimizing with AI...</span>
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
