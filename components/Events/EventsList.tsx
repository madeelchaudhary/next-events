import { EventStructure } from "@/types/Event";
import React from "react";
import EventItem from "./EventItem";

const EventsList = ({ events }: { events: EventStructure[] }) => {
  return (
    <div className="grid md:auto-cols-fr sm:max-md:grid-cols-2 gap-7 justify-center">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
