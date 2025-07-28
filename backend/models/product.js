import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug:  {type: String, required: true, unique: true},
    description: {type: String},
    short_description: {type: String},
    category_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    collection_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Collection', required: null},
    base_price: {type: Number, required: true},
    sku: {type: String, unique: true},
    weight: {type: Number},
    dimensions: {type: String},
    burn_time: {type: String},
    fragrance_notes: {type: String},
    is_active: {type: Boolean, default: true},
    is_featured: {type: Boolean, default: false},
    meta_title: {type: String},
    meta_description: {type: String},
    
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;