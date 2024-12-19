import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUser } from '../modules/user/user.interface';

const auth = (...requiredRoles: TUser[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // if the token is sent from the client
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    // check if the token is valid
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (error, decoded) {
        // error
        if (error) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized!',
          );
        }

        const role = (decoded as JwtPayload).role;

        if(requiredRoles && !requiredRoles.includes(role)){
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized!',
          );
        }

        req.user = decoded as JwtPayload;
        next();
      },
    );
  });
};

export default auth;
