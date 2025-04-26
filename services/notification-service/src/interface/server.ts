import express from 'express';
import notificationRoutes from './routes/notificationRoutes';

const app = express();
app.use(express.json());

// Mount notification routes
app.use('/api', notificationRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
