import { cn } from "@/lib/utils";
export function Section({ title, eyebrow, children, className }: { title?: string; eyebrow?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn("container py-12 md:py-16", className)}>
      {(title || eyebrow) && (
        <div className="mb-8">
          {eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-accent">{eyebrow}</p>}
          {title && <h2 className="mt-1 text-3xl font-bold md:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}
