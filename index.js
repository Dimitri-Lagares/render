import express from 'express';
import { config } from 'dotenv';
import pg from 'pg'

config()

const app = express();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
})

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  res.json(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});