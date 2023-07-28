import { db } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const eventId = req.query.id;

  const [events] = await db.query(
    "SELECT id FROM events WHERE id = " + eventId
  );

  if (!events[0]) {
    return res.status(404).json({ error: "No event exist" });
  }

  if (req.method === "GET") {
    const [rows, fields] = await db.query(
      `SELECT * from comments WHERE eventId = ${eventId}`
    );

    return res.json(rows);
  }

  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
      return res.status(400).json({ error: "Invalid VAlues" });
    }

    const dbRes = await db.query(
      `INSERT INTO comments (mail, name, message, eventId) VALUES ('${email}', '${name}', '${message}', ${eventId})`
    );

    return res.status(201).json({ message: "success" });
  }
}

export default handler;
