import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from '../models/user';
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return console.log('Already User');

    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passHash, name });

    return registerNewUser;

}
//api/auth/login
const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return console.log('User_Not_Found');

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "Password_Incorrect";

    const token = generateToken(checkIs.email);

    const data = {
        token,
        user: checkIs
    }
    return data;
}

export {
    registerNewUser,
    loginUser
}