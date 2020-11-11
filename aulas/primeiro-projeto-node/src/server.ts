import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello GoStack' }));

app.listen(3333, () => {
  console.log('🛴 Server online on port 3333');
});
