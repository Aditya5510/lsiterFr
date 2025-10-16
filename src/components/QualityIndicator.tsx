import { Star } from "lucide-react";

interface QualityIndicatorProps {
  score?: number;
  size?: "sm" | "md" | "lg";
}

export function QualityIndicator({
  score = 5,
  size = "md",
}: QualityIndicatorProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < score ? "fill-black text-black" : "fill-black/10 text-black/10"
          } transition-all duration-200`}
        />
      ))}
    </div>
  );
}
