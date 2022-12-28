import { model, Types, Schema, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            riquired: [true, 'El Nombre Es requerido']
        },
        password: {
            type: String,
            required: [true, 'La contrasela es requerida']
        },
        email: {
            type: String,
            required: [true, 'El correo es requerido'],
            unique: true
        },
        description: {
            type: String,
            default: 'Soy la Descripcion'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);
const UserModel = model('users', UserSchema);

export default UserModel;