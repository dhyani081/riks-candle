// User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  first_name: String,
  last_name: String,
  phone: String,
  is_active: {
    type: Boolean,
    default: true,
  },
  razorpay_customer_id: String,
}, { timestamps: true }); // createdAt and updatedAt

const User = mongoose.model("User", userSchema);
export default User;
