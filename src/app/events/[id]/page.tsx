import React from "react";
import { notFound } from "next/navigation";
import { events } from "@/data/site";
import { EventDetailView } from "./event-detail-view";

interface EventPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} />;
}
