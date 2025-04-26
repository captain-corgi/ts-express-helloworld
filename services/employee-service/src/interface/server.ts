import express from 'express';
import employeeRoutes from './routes/employeeRoutes';

console.log('Creating Express app...');
const app = express();
app.use(express.json());

// Mount employee routes
console.log('Mounting employee routes...');
app.use('/api', employeeRoutes);

// Global error handler (Clean Architecture)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error in request:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Add a simple health check route
app.get('/health', (req, res) => {
  console.log('Health check requested');
  res.status(200).json({ status: 'ok' });
});

console.log('Express app created successfully');
export { app };
