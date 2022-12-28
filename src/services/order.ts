import itemModel from '../models/item';

const getOrders = async () => {
    const responseItem = await itemModel.find({})
    return responseItem
}

export { getOrders,  }