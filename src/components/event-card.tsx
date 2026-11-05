import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EventItem } from "@/data/site";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Card className="flex flex-col">
      {event.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={event.image} alt={event.title} loading="lazy" className="h-48 w-full object-cover" />
      ) : <div className="h-48 bg-muted" />}
      <CardContent className="flex-1 space-y-2">
        <Badge className={event.tag === "Past" ? "bg-muted text-muted-foreground" : ""}>{event.tag}</Badge>
        <CardTitle>{event.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{event.summary}</p>
      </CardContent>
    </Card>
  );
}
