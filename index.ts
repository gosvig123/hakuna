import express from 'express';
const app = express();
import authenticate from './middleware/authenticate';

import userRouter from './routes/users';

import router from './routes/products';

app.use(express.json());

app.use(userRouter);
app.use(authenticate);
app.use(router);

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
export default app;
