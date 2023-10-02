import express from 'express';
const app = express();
import bodyParser from 'body-parser';

import todosRoute  from './routes/todos';

app.use(bodyParser.json());

app.use(todosRoute);

app.listen(3000);