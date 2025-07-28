import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema({
    product_Id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    name: {type: String, required: true},
    sku: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    compare_at_price: {type: Number},
    weight: {type: Number},
    stock_quantity: {type: Number, default: 0},
    low_stock_threshold: {type: Number, default: 5},
    is_active: {type: Boolean, default: true},
    barcode: {type: String}
});

const ProductVariant = mongoose.model('ProductVariant', productVariantSchema);
export default ProductVariant;