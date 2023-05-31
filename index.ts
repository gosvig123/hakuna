import express from 'express';

import dotenv from 'dotenv';
const app = express();

dotenv.config();

import authRouter from './routes/auth';

import router from './routes/products';

app.use(express.json());

app.use(authRouter);
app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
export default app;
