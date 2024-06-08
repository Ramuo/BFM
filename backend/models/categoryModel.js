import mongoose from 'mongoose';

 const subcategorySchema = new mongoose.Schema(
  {
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const categorySchema = mongoose.Schema(
  {
    title: { type: String },
    items: [subcategorySchema],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;