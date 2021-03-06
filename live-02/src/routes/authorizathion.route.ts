import { NextFunction, Response, Request, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middleware/basic-authentication.middleware";
import jwtAuthenticationMiddleware from "../middleware/jwt-authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    const user = req.user;
    if(!user) {
      throw new ForbiddenError('Usuário não informado!')
    }
   const jwtPayload = { username: user.username};
   const jwtOption = { subject: user?.uuid};
   const secretKey = 'my_secret_key';
   const jwt = JWT.sign(jwtPayload, secretKey, jwtOption)

   res.status(StatusCodes.OK).json({ token: jwt })

  } catch (error) {
    next(error)
  }
});


authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.OK);

})

export default authorizationRoute