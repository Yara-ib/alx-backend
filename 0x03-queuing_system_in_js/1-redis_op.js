// Using Redis v.7.4.0 not 6.0.10
// Some functions might changed or removed from older versions

import { createClient, print } from 'redis';

const client = createClient().on('error', (err) =>
  console.error(`Redis client not connected to the server: ${err}`)
);
client.connected;
console.log('Redis client connected to the server');

client.set('Holberton', 'School');

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
};

const displaySchoolValue = (schoolName) => {
  client.get(schoolName, print);
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
