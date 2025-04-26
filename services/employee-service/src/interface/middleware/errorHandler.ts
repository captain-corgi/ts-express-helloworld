import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err.isFailure) {
    return res.status(400).json({ error: err.error });
  }
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }
  res.status(500).json({ error: 'Unknown error.' });
}
