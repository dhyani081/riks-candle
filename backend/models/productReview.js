import mongoose from "mongoose";

const productReviewSchema = new mongoose.Schema({
    product_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    rating: {type: Number, min: 1, max: 5, required: true},
    title: {type: String},
    review_text: {type: String},
    is_verified_purchase: {type: Boolean, default: false},
    is_approved: {type: Boolean, default: false},
    helpful_count: {type: Number, default: 0},
},
{
    timestamps: true
});

const Productreview = mongoose.model('ProductReview', productReviewSchema);
export default Productreview;