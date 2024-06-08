import express from 'express';
import {
    register,
    login,
    logout,
    // getUsers,
    // getUserProfile,
    // updateUserProfile,
    // updloadAvatar,
    // deleteUser, 
    // getUserById
} from '../controllers/userController.js';
import {protect, authorize} from '../middleware/authMiddleware.js';
import checkObjectId from "../middleware/checkObjectId.js"

const router = express.Router();


// router.route('/').get(protect, getUsers)
router.route('/login').post(login);
router.route('/register').post(register);
router.route('/logout').post(logout);
// router.route('/uploadavatar').put(protect,  updloadAvatar);
// router
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// router.route('/:id')
//   .delete(protect, checkObjectId, deleteUser)
//   .get(protect, checkObjectId, getUserById)



export default router;