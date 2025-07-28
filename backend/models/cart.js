import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: null},
    session_id: {type: String, default: null},
    expires_at: {type: Date}

}, {
    timestamps: true
});

const Cart = mongoose.model('cart', cartSchema);
export default Cart;