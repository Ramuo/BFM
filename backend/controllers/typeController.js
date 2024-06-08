import Type from "../models/typeModel.js";
import asyncHandle from "../middleware/asyncHandler.js";



//@desc     Get News Type
//@route    GET /api/types
//@acc      Public
const getNewsType = asyncHandle(async (req, res) => {
    const allTypes = await Type.find({});

    res.status(200).json(allTypes);
});

export {
    getNewsType,
};