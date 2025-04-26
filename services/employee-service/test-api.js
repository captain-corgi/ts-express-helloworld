const http = require('http');

const data = JSON.stringify({
  name: 'Jane Smith',
  email: 'jane@example.com',
  startDate: '2025-05-15'
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/employees',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);

  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    console.log(`RESPONSE: ${responseData}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(data);
req.end();
