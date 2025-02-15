import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import coordsRouter from './routes/coords.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/CoordsApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', coordsRouter);

export default app;
