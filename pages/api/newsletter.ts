import { db } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const mail = req.body.email;

    if (!mail) {
      return res.status(422).json({ error: "Email is Invalid!" });
    }

    let dbRes;
    try {
      [dbRes] = await db.query(`INSERT INTO newsletter (mail) VALUES(?)`, [
        mail,
      ]);
    } catch (err: any) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(422).json({ error: "Email already exists!" });
      } else {
        return res.status(500).json({ error: err.sqlMessage });
      }
    }

    if (!dbRes.insertId) {
      return res.status(500).json({ error: "Try again later" });
    }

    return res.status(201).json({ message: "Success" });
  }
}

export default handler;
