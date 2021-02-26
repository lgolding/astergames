import express from 'express';
import mongoose from 'mongoose';
import { connectionString } from './config/keys';

const app = express();

app.use(express.json());

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database.'))
  .catch(err => {
    console.log(`Failed to connect to database: ${err}`);
    process.exit(1);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));
