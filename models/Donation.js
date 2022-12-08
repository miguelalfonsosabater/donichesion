const mongoose = require('mongoose');
const populate = require('mongoose-autopopulate');

const DonationSchema = new mongoose.Schema({
    dateCreated: { 
        type: Date, 
        default: Date.now 
    },
    donationAmount: Number,
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
        // , default :[] , autopopulate: true
    },
    donor: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', default :[] , autopopulate: true
        }
});

DonationSchema.plugin(populate);

module.exports = mongoose.model('Donation', DonationSchema);

