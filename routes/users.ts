import express from 'express';
import userService from '../services/userServices';

const userRouter = express.Router();

userRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (typeof username !== 'string') {
      return res.status(400).send('Invalid username');
    }

    if (typeof password !== 'string') {
      return res.status(400).send('Invalid password');
    }

    const token = await userService.login(username, password);

    if (!token) {
      return res.status(401).send('Invalid credentials');
    }

    res.json({ token });
  } catch (error) {
    console.error({ error: error as Error });
    res.status(500).send('An error occurred while logging in');
  }
});

export default userRouter;
