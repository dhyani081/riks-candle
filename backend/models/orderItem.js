import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true},
    product_variant_id: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true},
    product_name: {type: String, required: true},
    variant_name: {type: String, required: true},
    sku: {type: String},
    quantity: {type: Number, default: 1},
    price_at_time: {type: Number},
    total_price: {type: Number}
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
export default OrderItem;