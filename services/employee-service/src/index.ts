import { app } from './interface/server';

console.log('Starting Employee Service...');
const PORT = process.env.PORT || 3001;

try {
  const server = app.listen(PORT, () => {
    console.log(`Employee Service running on port ${PORT}`);
    console.log(`Health check available at http://localhost:${PORT}/health`);
  });

  server.on('error', (error) => {
    console.error('Server error:', error);
  });
} catch (error) {
  console.error('Failed to start server:', error);
}
