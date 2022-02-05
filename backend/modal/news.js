// object validation
// mvc(model view controller) structure is followed
import mongoose from 'mongoose';
// view
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

// model

const news = mongoose.model('news', newsSchema);
export default news;