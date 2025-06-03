require('dotenv').config();
const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const conn = await mysql.createConnection({
      host: "sql12.freesqldatabase.com",
      user: "sql12778836",
      password: "k9rGXTmDwA",
      database: "sql12778836",
      port: 3306
    });
    console.log('Koneksi ke database SUKSES');
    await conn.end();
  } catch (err) {
    console.error('Gagal koneksi ke database:', err.message);
  }
}

testConnection();