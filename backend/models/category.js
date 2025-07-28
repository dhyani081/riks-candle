
import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    description: {type: String},
    image_url: {type: String},
    parent_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null},
    is_active: {type: Boolean, default: true},
    sort_order: {type: Number, default: 0}
});

const Category = mongoose.model('Category', categorySchema);

export default Category;