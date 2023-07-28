import { EventStructure } from "@/types/Event";
const API =
  "https://nextjs-events-14706-default-rtdb.firebaseio.com/events.json";

export async function getAllEvents() {
  const response = await fetch(API);
  const data = await response.json();
  const formatedData: EventStructure[] = [];

  for (const key in data) {
    const item = { id: key, ...data[key] };
    formatedData.push(item);
  }
  return formatedData;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((item) => item.isFeatured);
}

export async function getEventById(id: string) {
  const allEvents = await getAllEvents();
  return allEvents.find((item) => item.id === id);
}
