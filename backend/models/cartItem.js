import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    cart_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true},
    product_variant_id: {type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant', required: true},
    quantity: {type: Number, default: 1},
    price_at_time: {type: Number, required: true},
    added_at: {type: Date, default: Date.now}
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
export default CartItem;