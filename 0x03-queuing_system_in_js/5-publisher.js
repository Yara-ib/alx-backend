import { createClient } from 'redis';


const publisher = createClient();

publisher.on('error', (err) =>
  console.error(`Redis client not connected to the server: ${err}`)
).connected;
console.log('Redis client connected to the server');

const publishMessage = (message, time) => {
  setTimeout(() => {
    publisher.publish('holberton school channel', message);
  }, time);
  console.log(`About to send ${message}`);
};

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
