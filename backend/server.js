import path from 'path';
import http from "http";
import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import connectDB from "./config/db.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';



import userRoute from './routes/userRoute.js';
import typeRoute from "./routes/typeRoute.js";
import categoryRoute from "./routes/categoryRoute.js"
import newsRoute from "./routes/newsRoute.js"



const port = process.env.PORT;

//CONNECT DB
connectDB();

//INITIALIZE EXPRESS
const app = express();



//BODY PARSER MIDDLEWARE
app.use( express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Anable cors
app.use(cors());

//ROUTES
app.use('/api/users', userRoute);
app.use('/api/types', typeRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/news', newsRoute);


//STATIC ROUTE
app.get('/', (req, res) => {
    res.send('API is running');
});

//MIDDLEWARE
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is runing on port ${port}`) );