import express, { json } from 'express';
import mainRouter from './routes/main';

const app = express();
const PORT = 63000;

app.use(json());

app.use('/', mainRouter);

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
