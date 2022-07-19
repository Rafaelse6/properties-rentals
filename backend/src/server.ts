import express from 'express';
import { route } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use('/categories', route);

app.listen(3333, () => console.log('The server is online!'));
