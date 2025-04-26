import express from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
app.use(express.json());

// Mount task routes
app.use('/api', taskRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
});
