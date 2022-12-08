const mongoose = require('mongoose');
const populate = require('mongoose-autopopulate');



const CommentSchema = new mongoose.Schema({
    dateCreated: { 
        type: Date, 
        default: Date.now 
    },
    body: String,
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', default: [], autopopulate: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', default: [], autopopulate: true
    }
});



CommentSchema.plugin(populate);



module.exports = mongoose.model('Comment', CommentSchema);
