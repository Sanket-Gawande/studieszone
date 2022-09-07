import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
  name: String,
  category: String,
  icon: String,
  slug: String,
  view: String,
  content: String,
  title: String,
  price: Number,
  features: [String],
});

export const coursesCollection = mongoose.model("courses", coursesSchema);
