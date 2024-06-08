import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import categories from "./data/categories.js";
import users from  "./data/users.js";
import tags from "./data/tags.js";
import types from "./data/types.js";
import Category from "./models/categoryModel.js";
import User from "./models/userModel.js";
import Tag from "./models/tagModel.js";
import Type from "./models/typeModel.js"

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Category.deleteMany();
        await User.deleteMany();
        await Tag.deleteMany();
        await Type.deleteMany();

        await Category.insertMany(categories);
        await User.insertMany(users);
        await Tag.insertMany(tags);
        await Type.insertMany(types);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
      await Category.deleteMany();
      await User.deleteMany();
      await Tag.deleteMany();
      await Type.deleteMany();
  
      console.log('Data Destroyed!'.red.inverse);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  };
  
  if (process.argv[2] === '-d') {
    destroyData();
  } else {
    importData();
}