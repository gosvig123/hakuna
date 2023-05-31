import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const saltRounds = 10;
// Simulated users database
const users = [
  {
    id: 1,
    username: 'JohnDoe',
    password: bcrypt.hash('hashedpassword1', saltRounds), // Assume this is a hashed before you see it.
  },
  {
    id: 2,
    username: 'JaneDoe',
    password: bcrypt.hash('hashedpassword2', saltRounds), // Assume this is a hashed before you see it.
  },
];

const SECRET = 'VERY_SECRET_KEY'; // this would normally be in an .env file

const userService = {
  login: async (username: string, password: string) => {
    const user = users.find((user) => user.username === username);
    if (!user) {
      throw new Error('No user found with this username');
    }

    const passwordMatch = await bcrypt.compare(
      password,
      await user.password
    );

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      SECRET,
      {
        expiresIn: '1h',
      }
    );

    return token;
  },
};

export default userService;
