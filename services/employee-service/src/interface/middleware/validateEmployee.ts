import { Request, Response, NextFunction } from 'express';

export function validateEmployee(req: Request, res: Response, next: NextFunction): void {
  const { name, email, startDate } = req.body;
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    res.status(400).json({ error: 'Name must be at least 2 characters.' });
    return;
  }
  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: 'Invalid email address.' });
    return;
  }
  if (!startDate || isNaN(Date.parse(startDate))) {
    res.status(400).json({ error: 'Invalid start date.' });
    return;
  }
  next();
}
