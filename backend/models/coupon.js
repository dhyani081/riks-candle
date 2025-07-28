import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },
    name: {type: String},
    type: {
        type: String,
        enum: ['percentage', 'fixed_amount', 'free_shipping'],
        required: true
    },
    value: {type: Number},
    minimum_order_amount: {type: Number, dafault: 0},
    maximum_discount_amount: {type: Number},

    usage_limit_total: {type: Number},
    usage_limit_per_customer: {type: Number},
    used_count: {type: Number, default: 0},

    applies_to: {
        type: String,
        enum: ['all', 'category', 'collection', 'product'],
        default: 'all'
    },

    applies_to_ids: {type: [mongoose.Schema.Types.ObjectId], default: []},

    valid_from: {type: Date},
    valid_until: {type: Date},
    is_active: {type: Boolean, default: true}

}, {
    createdAt: 'created_at', updatedAt: false
});

const Coupon = mongoose.model('Coupon', couponSchema);
export default Coupon;
