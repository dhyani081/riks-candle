import mongoose from "mongoose";

const inventoryTransactionSchema = new mongoose.Schema({
    product_variant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductVariant',
        required: true
    },
    type: {
        type: String,
        enum: ['sale', 'restock', 'adjustment', 'return', 'damaged'],
        required: true
    },
    quantity_change: {
        type: Number,
        required: true
    },
    quantity_before : Number,
    quantity_after: Number,
    reference_type: {type: String},
    reference_id: {type: mongoose.Schema.Types.ObjectId},
    notes: {type: String},
    created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
});

const InventoryTransaction = mongoose.model('InventoryTransaction', inventoryTransactionSchema);
export default InventoryTransaction;