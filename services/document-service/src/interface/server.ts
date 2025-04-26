import express from 'express';
import documentRoutes from './routes/documentRoutes';

const app = express();
app.use(express.json());

// Mount document routes
app.use('/api', documentRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Document Service running on port ${PORT}`);
});
