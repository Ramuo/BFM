import express from "express";

import {
    getNewsCategory,
    AllCategoriesWithSubCategory
} from "../controllers/categoryController.js"

const router = express.Router();


router.route('/').get(getNewsCategory);
router.route('/getsubcategories/:catName').get(AllCategoriesWithSubCategory);

export default router;