import { createClient } from 'redis';

const subscriber = createClient();

subscriber.on('error', (err) =>
  console.error(`Redis client not connected to the server: ${err}`)
).connected;
console.log('Redis client connected to the server');

const channel = 'holberton school channel';

subscriber.subscribe(channel);
subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
