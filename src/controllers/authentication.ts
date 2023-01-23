import { NextFunction, Request, Response } from 'express';


export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-authentication-token'] as string;

  if (token) {
    req.body.oauth = token;
  }

  next();
};
