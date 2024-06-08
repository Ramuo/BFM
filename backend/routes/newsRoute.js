import express from "express";
import multer from "multer";
const upload = multer();
import connectDB from "../config/db.js";
import { 
    createnews, 
    newsList
} from "../controllers/newsController.js";
import {protect, authorize} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/newsList').get(newsList);
router.route('/createnews').post(upload.single("file"), function(req, res, next){
    createnews(req, res, next, connectDB());
});

router.route('/getLastFiveLiveUpdateNewsType').get();

export default router;