import mongoose from "mongoose";


const shippingRateSchema = new mongoose.Schema({
    from_pincode: {
        type: String,
        required: true, 
    },
    to_pincode: {
        type: String,
        required: true,
    },
    weight_from: {
        type: Number,
        required: true,
    },
    weight_to: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    courier_partner: {
        type: String,
        required: true,
    },
    estimated_days: {
        type: Number,
        required: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: {createdAt: 'created_at', updatedAt: false}
});

const ShippingRate = mongoose.model('ShippingRate', shippingRateSchema);
export default ShippingRate;