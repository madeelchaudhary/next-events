import { db } from "@/db";
import { EventStructure } from "@/types/Event";

export async function getAllEvents(): Promise<EventStructure[]> {
  const [rows] = await db.query("SELECT * FROM events");

  return rows;
}

export async function getFeaturedEvents(): Promise<EventStructure[] | []> {
  const [rows] = await db.query("SELECT * FROM events WHERE isFeatured = true");

  return rows;
}

export async function getEventById(id: string): Promise<EventStructure[] | []> {
  const [rows] = await db.query(`SELECT * FROM events WHERE id = ${id}`);

  return rows[0];
}

export async function getEventsId() {
  const [rows] = await db.query("SELECT id FROM events");

  return rows;
}
