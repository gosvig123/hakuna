import jwt from 'jsonwebtoken';

// Simulated users database
const users = [
  {
    id: 1,
    username: 'JohnDoe',
    password: 'hashedpassword1', // Assume this is a hashed password
  },
  {
    id: 2,
    username: 'JaneDoe',
    password: 'hashedpassword2', // Assume this is a hashed password
  },
];

const SECRET = 'VERY_SECRET_KEY'; // this would normally be in an .env file

const userService = {
  login: async (username: string, password: string) => {
    try {
      const user = users.find((user) => user.username === username);
      if (!user) {
        throw new Error('No user found with this username');
      }

      // normally this would be a hashed password to be compared
      const passwordMatch = users.find(
        (user) => password === user.password
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
    } catch (error) {
      console.error({ error: error as Error });
    }
  },
};

export default userService;
