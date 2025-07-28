import mongoose from "mongoose";

const razorpayWebHookSchema = new mongoose.Schema({
    event_id: {
        type: String,
        required: true,
        unique: true
    },
    event_type: {
        type: String,
        required: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: null,
    },
    payment_id: {
        type: String,
        required: true,
    } ,
    payload: {
        type: Object,
        required: true,
    },
    processed: {
        type: Boolean,
        default: false,
    },
    processed_at: {
        type: Date,
        default: null
    },
}, {
    timestamps: {createdAt: 'created_at', updatedAt:false}
});

const RazorpayWebHook = mongoose.model('RazorpayWebHook', razorpayWebHookSchema);
export default RazorpayWebHook;