import mongoose from "mongoose";


const inventorySchema = new mongoose.Schema({
    product_variant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant',
        required: true,
        unique: true
    },
    quantity_available: {
        type: Number,
        default: 0
    },
    quantity_reserved: {
        type: Number,
        default: 0
    },
    quantity_sold: {
        type: Number,
        default: 0
    },
    low_stock_threshold: {
        type: Number,
        default: 5
    },
    last_restocked_at: {
        type: Date
    }
}, {
    timestamps: {updatedAt: 'updated_at'}
    
});

const Inventory = mongoose.model('Inventory', inventorySchema);
export default Inventory;