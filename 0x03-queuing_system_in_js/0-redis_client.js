import { createClient } from 'redis';

async function connectRedis() {
  try {
    const client = createClient();

    client
      .on('connect', () => {
        console.log('Redis client connected to the server');
      })
      .on('error', (err) => {
        console.error(`Redis client not connected to the server: ${err}`);
      });

    await client.connect();
    
  } catch (err) {
    console.error(`Redis client not connected to the server: ${err}`);
  }
}

connectRedis();
