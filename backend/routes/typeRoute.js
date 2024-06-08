import express from "express";
import {
    getNewsType
} from "../controllers/typeController.js";



const router = express.Router();


router.route('/').get(getNewsType);


export default router;
