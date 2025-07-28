import mongoose from "mongoose";

const orderschema = new mongoose.Schema({
    order_number: {type: String, required: true, unique: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
    email: {type: String},
    phone: {type: String},

    status: {
        type: String,
        enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled',  'returned'],
        default: 'pending'
    },
    
    subtotal: Number,
    tax_amount: Number,
    shipping_amount: Number,
    discount_amount: Number,
    total_amount: Number,
    currency: {type: String, default: 'INR'},

    payment_status: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded'],
        default: 'pending'
    },

    payment_method: {type: String, enum: ['razorpay', 'COD'], default: 'COD'},
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,

    shiprocket_order_id: String,
    shiprocket_shipment_id: String,
    tracking_number: String,
    courier_name: String,
    estimated_delivery_date: Date,

    notes: String
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderschema);
export default Order;

