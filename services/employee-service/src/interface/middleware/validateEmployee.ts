import { Request, Response, NextFunction } from 'express';

export function validateEmployee(req: Request, res: Response, next: NextFunction) {
  const { name, email, startDate } = req.body;
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters.' });
  }
  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (!startDate || isNaN(Date.parse(startDate))) {
    return res.status(400).json({ error: 'Invalid start date.' });
  }
  next();
}
