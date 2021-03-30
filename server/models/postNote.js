import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    note: String,
    encryption: String,
    createdAt: {
        type: Date,
        default:  Date.now,
    },
})

var PostNote = mongoose.model('PostNote', noteSchema);

export default PostNote;