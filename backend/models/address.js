// models/Address.js
import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['billing', 'shipping'],
    required: true,
  },
  address_line_1: { type: String, trim: true },
  address_line_2: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip_code: { type: String, trim: true },
  country: {
    type: String,
    default: "India",
    trim: true,
  },
  is_default: {
    type: Boolean,
    default: false,
  },
  shiprocket_address_id: String,
}, { timestamps: true });

const Address = mongoose.model("Address", addressSchema);
export default Address;
