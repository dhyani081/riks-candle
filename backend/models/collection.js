import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    description: {type: String},
    image_url: {type: String},
    is_active: {type: Boolean, default: true},
    sort_order: {type: Number, default: 0},
    meta_title: {type: String},
    meta_description: {type: String}


});

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;