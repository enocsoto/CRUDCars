import { Request, Response } from 'express';
import { getCars, insertCar, getCar, updateCar, deleteCar } from '../services/item';
import { handleHttp } from '../utils/error.handle';

const getItem = async  ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getCar(id);
        const data = response ? response : "Not_Found";
        res.send(data);
    } catch (err) {
        handleHttp(res, 'Error Get Item')
    }

}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);

    } catch (err) {
        handleHttp(res, 'Error Get Items')
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (err) {
        handleHttp(res, 'Error Post Item',err)
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (err) {
        handleHttp(res, 'Error Put Item')
    }
}
const deleteItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await deleteCar(id);
        res.send(response);
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