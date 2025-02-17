require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255),
  message TEXT,
  date TIMESTAMPTZ
);

INSERT INTO messages (name, message, date)
VALUES ('Bryan Chesky', 'Airbnb is the best!', NOW());
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
