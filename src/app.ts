import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/mongo';

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

dbConnect().then(()=>{
    console.log('Conexion Ready');  
});

app.listen(port,()=>{
    console.log(`Server listen on port: ${port}`);   
});