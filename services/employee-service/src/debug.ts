console.log('Debug script starting...');

try {
  console.log('Importing server...');
  const { app } = require('./interface/server');
  
  console.log('Server imported successfully');
  console.log('Starting server...');
  
  const PORT = 3001;
  
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  console.log('Server started');
} catch (error) {
  console.error('Error starting server:', error);
}
