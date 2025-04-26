import express from 'express';
import trainingSessionRoutes from './routes/trainingSessionRoutes';

const app = express();
app.use(express.json());

// Mount training session routes
app.use('/api', trainingSessionRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Training Service running on port ${PORT}`);
});
