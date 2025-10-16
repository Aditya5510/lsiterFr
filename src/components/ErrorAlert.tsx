import { AlertCircle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

interface ErrorAlertProps {
  error: string;
  onDismiss: () => void;
}

export function ErrorAlert({ error, onDismiss }: ErrorAlertProps) {
  return (
    <Alert
      variant="destructive"
      className="bg-black text-white border-black px-3 sm:px-4"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="font-semibold text-sm sm:text-base">
        Error
      </AlertTitle>
      <AlertDescription className="flex items-center justify-between gap-2 sm:gap-4">
        <span className="text-white/90 text-xs sm:text-sm">{error}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          className="h-6 w-6 p-0 hover:bg-white/20 flex-shrink-0"
        >
          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
}
