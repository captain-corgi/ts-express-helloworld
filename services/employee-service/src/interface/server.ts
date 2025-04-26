import express from 'express';
import employeeRoutes from './routes/employeeRoutes';

const app = express();
app.use(express.json());

// Mount employee routes
app.use('/api', employeeRoutes);

// Global error handler (Clean Architecture)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Employee Service running on port ${PORT}`);
});
