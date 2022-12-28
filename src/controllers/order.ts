import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request{
    user?: string|JwtPayload
}

const getItems = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: 'Esto es la respuesta con JWT',
            user:req.user
        })
    } catch (err) {
        handleHttp(res, 'Error Get Blogs')
    }
}



export {
    getItems,
   
}