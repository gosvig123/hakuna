import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Set the secret key as an environment variable
const SECRET = process.env.JWT_SECRET || 'VERY_SECRET_KEY';

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('No token provided');
  }

  // Check if the header actually starts with 'Bearer '
  if (!authorization.includes('Bearer ')) {
    return res.status(401).send('Malformed authorization header');
  }

  // Now we can safely split the string
  const token = authorization.split('Bearer ')[1];

  try {
    jwt.verify(token, SECRET);
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      console.error((error as Error).message);
      return res.status(401).send('Invalid token');
    } else {
      console.error((error as Error).message);
      return res
        .status(500)
        .send('An error occurred while verifying the token');
    }
  }
};

export default authenticate;
