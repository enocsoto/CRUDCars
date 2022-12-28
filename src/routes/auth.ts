import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
const router = Router();
//TODO: login
router.post('/register',registerCtrl );
router.post('/login',loginCtrl );


export {router};