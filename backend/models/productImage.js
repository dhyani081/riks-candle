import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
    product_id: {type: mongoose.Schema.Types.ObjectId, ref:'Product', required: true},
    image_url: {type: String, required: true},
    alt_text: {type: String},
    sort_order: {type: Number, default: 0},
    is_primary: {type: Boolean, default: false}
});

const ProductImage = mongoose.model('ProductImage', productImageSchema);
export default ProductImage;