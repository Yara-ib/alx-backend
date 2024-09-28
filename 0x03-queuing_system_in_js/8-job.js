import {createQueue } from 'kue';

const queue = createQueue();
const createPushNotificationsJobs = (jobs, queue) => {
  if (!typeof jobs === 'Array') throw new Error('Jobs is not an array');

  for (let job in jobs) {
    const job2 = queue.create('push_notification_code_3', job).save(() => {
      console.log(`Notification job created: ${job2.id}`);

      job2
        .on('progress', (progress) => {
          console.log(`Notification job ${job2.id} ${progress}% complete`);
        })
        .on('complete', () => {
          console.log(`Notification job ${job2.id} completed`);
        })
        .on('failed', (err) => {
          console.log(`Notification job ${job2.id} failed: ${err}`);
        });
    });
  }
};


module.exports = createPushNotificationsJobs;
