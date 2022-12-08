const mongoose = require('mongoose');

// const mongooseAutoPopulate = require('mongoose-autopopulate');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    contactNumber: String,
    image: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Post'
            // , default :[] , autopopulate: true
        }
    ],
    donations:
        [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Donation'
                , default: [], autopopulate: true
            }
        ]
});

// UserSchema.plugin(mongooseAutoPopulate)

module.exports = mongoose.model('User', UserSchema);