// import { createClient } from 'redis';

// const client = await createClient();

// client.on('error', (err) =>
//   console.error(`Redis client not connected to the server: ${err}`)
// );
// console.log('Redis client connected to the server').connect();

// const client = await createClient()
//   .on('error', (err) =>
//     console.error(`Redis client not connected to the server: ${err}`)
//   )
//   .connect(() => console.log('Redis client connected to the server'));

import { createClient } from 'redis';

async function connectRedis() {
  try {
    const client = createClient();

    client.on('connect', () => {
      console.log('Redis client connected to the server');
    });

    client.on('error', (err) => {
      console.error(`Redis client not connected to the server: ${err}`);
    });

    await client.connect();
  } catch (err) {
    console.error(`Redis client not connected to the server: ${err}`);
  }
}

connectRedis();
