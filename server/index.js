import express from 'express';
import cors from 'cors';
import routes from './routes/notes.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.urlencoded({ extended: true }));
 
app.use(express.json({ extended: true }));

app.use(cors());

app.use('/notes',routes);

const CONNECTION_URL = 'mongodb+srv://deepak:deepak123@cluster0.r1jch.mongodb.net/todoDB?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
