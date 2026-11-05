import { cn } from "@/lib/utils";
export const Badge = ({ className, ...p }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("inline-block rounded-full bg-secondary px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-secondary-foreground", className)} {...p} />
);
