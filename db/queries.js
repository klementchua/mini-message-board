const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id=$1', [id]);
  return rows;
}

async function insertMessage({ name, message }) {
  await pool.query(
    `INSERT INTO messages (name, message, date)
    VALUES ($1, $2, NOW())`,
    [name, message]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
