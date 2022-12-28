import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request{
    user?: string | JwtPayload;
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        console.log(isUser);
        
        if (!isUser) {
            res.status(401).send('No tiene un JWT Valido');
        } else {
            req.user = isUser;
            console.log({jwtByUser});
            next();
        }

    } catch (err) {
        res.status(400).send('SESSION_EXPIRED');
    }
}

export { checkJwt }