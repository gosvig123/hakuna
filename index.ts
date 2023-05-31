import express from 'express';
const app = express();

import authRouter from './routes/auth';

import router from './routes/products';

app.use(express.json());

app.use(authRouter);
app.use(router);

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
export default app;
