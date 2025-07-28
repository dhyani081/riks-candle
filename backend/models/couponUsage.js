import mongoose from "mongoose";

const couponUsageSchema = new mongoose.Schema({
    coupon_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coupon',
        required: true  
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    discount_amount: {
        type: Number,
        required: true
    },
    used_at: {
        type: Date,
        default: Date.now
    }
});


const CouponUsage = mongoose.model('CouponUsage', couponUsageSchema);
export default CouponUsage;