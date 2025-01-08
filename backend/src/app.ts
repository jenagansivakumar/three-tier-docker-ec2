import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).send({ message: 'User added successfully' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
