import { Request, Response } from 'express';
//import { interItem } from '../services/item';
import { handleHttp } from '../utils/error.handle';

const getItem = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            msg: 'HOla desde Get|'
        })

    } catch (err) {
        handleHttp(res, 'Error Get Item')
    }

}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (err) {
        handleHttp(res, 'Error Get Items')
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        //const responseItem = await interItem(body);
        res.send(body);
    } catch (err) {
        handleHttp(res, 'Error Post Item')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (err) {
        handleHttp(res, 'Error Put Item')
    }
}
const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (err) {
        handleHttp(res, 'Error Delete Item')
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}