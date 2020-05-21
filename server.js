import 'dotenv/config';

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/data', routes.data);

app.get('/', (req, res) => res.send('GTutor API'));

app.listen(process.env.PORT, () =>
    console.log(`Server app listening on port ${process.env.PORT}!`),
);