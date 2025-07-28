import mongoose from "mongoose";

const orderStatusHistorySchema = new mongoose.Schema({
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true},
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'],
        required: true
    },

    notes: {type: String},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
    created_at: {type: Date, default: Date.now}
});

const OrderStatusHistory = mongoose.model('OrderStatusHistory', orderStatusHistorySchema);
export default OrderStatusHistory;