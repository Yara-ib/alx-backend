import { sendNotification } from './6-job_processor';

const blacklisted = [4153518780, 4153518781];
const sendNotification = (phoneNumber, message, job, done) => {
  if (phoneNumber in blacklisted) {
    console.error(`Phone number ${phoneNumber} is blacklisted`);
  }
  sendNotification(phoneNumber, message);
};
