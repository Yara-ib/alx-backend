import kue from 'kue';

const queue = kue.createQueue();

const push_notification_code = queue.create({
    phoneNumber: string,
    message: string,
  })
