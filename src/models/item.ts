import { model, Types, Schema, Model } from 'mongoose';
import { Car } from '../interfaces/car.interfaces';

const itemSchema = new Schema<Car>(
    {
        color: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
            required: true
        },
        year: {
            type: Number,
            required: true

        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
            uniqued: [true, "El nombre del vehiculo ya existe"]
        }

    },
    {
        timestamps: true,
        versionKey: false,
    });

const itemModel = model('items', itemSchema);

export default itemModel;