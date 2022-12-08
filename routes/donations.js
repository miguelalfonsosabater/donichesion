const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Post = require('../models/Post')
const Donation = require('../models/Donation')




router.get('/:postId', (request, response) => {
    Donation.find().then(result => {
        response.send( result )
    })
    .catch(error => response.status(400).send(error))
})



// add Donation
router.post('/add', async (request, response) => {
    const donate = new Donation(request.body)
    await donate.save()
    .then(result => {
        User.updateOne(
            {_id : request.body.donor},
            {$push : {donations : result._id.toString()}}
            )
    })
    .catch(error => response.status(400).send(error))
})



module.exports = router
