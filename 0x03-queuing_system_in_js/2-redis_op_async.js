// Using Redis v.7.4.0 not 6.0.10
// Some functions might changed or removed from older versions
// Using promisify, modify the function displaySchoolValue to use ES6 async / await

import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient().on('error', (err) =>
  console.error(`Redis client not connected to the server: ${err}`)
);
client.connected;
console.log('Redis client connected to the server');

client.set('Holberton', 'School');

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, print);
};

async function displaySchoolValue(schoolName) {
  const promise = promisify(client.get).bind(client);
  console.log(await promise(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
