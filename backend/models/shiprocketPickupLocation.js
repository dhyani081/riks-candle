import mongoose from "mongoose";

const shiprocketPickupLocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shiprocket_pickup_id: {
        type: String,
        required: true
    },
    contact_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    },
    is_default: {
        type: Boolean,
        default: false  
    }
}, {
    timestamps: true
});

const ShiprocketPickupLocation = mongoose.model('ShiprocketPickupLocation', shiprocketPickupLocationSchema);
export default ShiprocketPickupLocation;