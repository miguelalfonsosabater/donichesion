const mongoose = require('mongoose');
const populate = require('mongoose-autopopulate');

const PostSchema = new mongoose.Schema({
    dateCreated: { 
        type: Date, 
        default: Date.now 
    },
    slug: String,
    title: String,
    body: String,
    purpose: String,
    fundNeeded: Number,
    fundAccumulated: Number,
    image: String,
    status: {
        type: String, 
        default: 'ongoing' 
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', default :[] , autopopulate: true
    },
    donations: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Donation'
            // , default: [], autopopulate: true
        }
    ],
    comments: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment', default: [], autopopulate: true
        }
    ]
});

PostSchema.plugin(populate)

module.exports = mongoose.model('Post', PostSchema);