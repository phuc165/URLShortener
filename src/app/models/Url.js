import mongoose from 'mongoose';
const { Schema } = mongoose;

const url = new Schema({
    long_url: String,
    short_url: String,
});

export default mongoose.model('url', url);
