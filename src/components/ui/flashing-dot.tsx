import { cn } from "@/lib/utils";

interface FlashingDotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

export function FlashingDot({
  className,
  size = "md",
  color = "bg-green-500"
}: FlashingDotProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  };

  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          color
        )}
      />
      <span
        className={cn(
          "relative inline-flex rounded-full",
          sizeClasses[size],
          color
        )}
      />
    </span>
  );
}
