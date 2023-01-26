import { NextFunction, Request, Response } from 'express';


export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-authentication-token'] as string;

  if (!token) {
    return res.status(401).json({ error: 'User Unauthorized' });
  }
  
  req.body.oauth = token;
  next();
};
