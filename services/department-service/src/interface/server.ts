import express from 'express';
import departmentRoutes from './routes/departmentRoutes';

const app = express();
app.use(express.json());

// Mount department routes
app.use('/api', departmentRoutes);

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Department Service running on port ${PORT}`);
});
