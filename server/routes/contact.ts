import { RequestHandler } from "express";

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export const handleContact: RequestHandler = (req, res) => {
  const body = req.body as ContactRequest;
  if (!body?.name || !body?.email || !body?.message) {
    return res.status(400).json({ ok: false, error: "Invalid payload" });
  }
  // In production, integrate with email or CRM here.
  console.log("New contact message:", body);
  res.status(200).json({ ok: true });
};
