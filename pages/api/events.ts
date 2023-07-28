import { getAllEvents } from "@/lib/events/events";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  if (req.method !== "GET")
    return res.status(404).json({ message: "Invalid Endpoint." });
  if (query.type === "search") {
    const { y: filterYear, m: filterMonth } = query;
    const numYear = +(filterYear as string),
      numMonth = +(filterMonth as string);

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth < 0 ||
      numMonth > 11
    ) {
      return res.status(404).json({ message: "Invalid search term!" });
    }

    const allEvents = await getAllEvents();

    const filterEvents = allEvents.filter((item) => {
      const date = new Date(item.date);
      return date.getFullYear() === numYear && date.getMonth() === numMonth;
    });

    return res.status(200).json(filterEvents);
  }

  const allEvents = await getAllEvents();
  res.status(200).json({ events: allEvents });
}
