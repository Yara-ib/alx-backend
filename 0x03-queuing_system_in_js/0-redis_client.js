import { createClient } from 'redis';

const client = createClient().on('error', (err) =>
  console.error(`Redis client not connected to the server: ${err}`)
);
client.connected;
console.log('Redis client connected to the server');
