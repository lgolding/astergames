import express from 'express';
import mongoose from 'mongoose';
import { connectionString } from './config/keys';

import games from './routes/api/games';

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

runServer(port);

async function runServer(port: number) {
  const app = express();

  app.use(express.json());

  app.use('/api/games', games);

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database.');
  } catch (err) {
    console.log(`Failed to connect to database: ${err}`);
    process.exit(1);
  }

  app.listen(port, () => console.log(`Server started on port ${port}.`));
}
