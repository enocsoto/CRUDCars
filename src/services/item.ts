import { Car } from '../interfaces/car.interfaces';
import itemModel from '../models/item';

const insertCar = async (item: Car) => {
    const responseInsert = await itemModel.create(item);
    return responseInsert;
}

const getCars = async () => {
    const responseItem = await itemModel.find({})
    return responseItem
}
const getCar = async (id: string) => {
    const responseItem = await itemModel.findOne({ _id: id })
    return responseItem
}
const updateCar = async (id: string, data: Car) => {
    const responseItem = await itemModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true })
    return responseItem
}
const deleteCar = async (id: string) => {
    const responseItem = await itemModel.remove({ _id: id })
    return responseItem
}

export { insertCar, getCars, getCar, updateCar, deleteCar }