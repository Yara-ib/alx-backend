import publisher from './5-publisher';

const subscriber = publisher.duplicate();
const channel = 'holberton school channel';

subscriber.subscribe(channel);
subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
  }
});
