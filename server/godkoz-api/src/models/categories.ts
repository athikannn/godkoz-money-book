import { Schema, model, Types } from 'mongoose';

const categoriesSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  title: { type: String, required: true },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
});

export const CategoriesModel = model('categories', categoriesSchema);

export default CategoriesModel;
