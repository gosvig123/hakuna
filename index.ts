import express from 'express';

import cors from 'cors';

const app = express();

const router = express.Router();

app.use(router);

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
export default app;
