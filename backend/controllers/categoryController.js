import Category from "../models/categoryModel.js";
import asyncHandle from "../middleware/asyncHandler.js";



//@desc     Get News Type
//@route    GET /api/categories
//@acc      Public
const getNewsCategory = asyncHandle(async (req, res) => {
    const allCategories = await Category.find({});
    res.status(200).json(allCategories );
});

//@desc     Get News Type
//@route    GET /api/categories/getsubcategories/:catName
//@acc      Public
const AllCategoriesWithSubCategory = asyncHandle (async (req, res) => {
    const selectedCategory = req.params.catName;

    const category = await Category.findOne({title: selectedCategory})
    if(!category){
        res.status(400);
        throw new Error("Aucune sous catégorie trouvée")
    }else{
        
        console.log(category.items)
        res.status(200).json(category.items);
    }
});

export {
    getNewsCategory,
    AllCategoriesWithSubCategory,
};