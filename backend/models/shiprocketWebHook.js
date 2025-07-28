import mongoose from "mongoose";

const shiprocketWebHookSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    shiprocket_order_id: {
        type: String,
        required: true
    },
    shipment_id: {
        type: String,
        required: true
    },
    awb: {
        type: String,
        required: true,
    },
    courier_name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    payload: {
        type: Object,
        required: true,
    },
    processed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {createdAt: 'created_at', updatedAt: false}
});

const ShiprocketWebHook = mongoose.model('ShiprocketWebHook', shiprocketWebHookSchema);
export default ShiprocketWebHook;