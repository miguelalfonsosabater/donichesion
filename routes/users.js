const express = require('express');
const router = express.Router();

// Model
const User = require('../models/User');

/* Get a specific user */
router.get('/:id', ( request, response ) => {
    User.findOne(
        { _id: request.params.id },
        { 
            password: 0
        })
    .then( (result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});



/* Get all posts of a specific user */
router.get('/:id/posts', ( request, response ) => {
    User
    .find(
        { _id: request.params.id },
        { 
            posts: 1
        })
    // .populate('posts', '-author -__v')
    .exec( (error, result) => {
        console.log( result );
        if( typeof result === 'object' ){
            response.send( result );
        }
    });
});




/* Update a user  */
router.put('/:id', ( request, response ) => {
    const userId = request.params.id;
    User.updateOne(
        { _id: userId }, 
        { $set: { ...request.body } })
    .then( result => {
        if( result.modifiedCount === 1 ){
            response.send({ status: "User has been updated" });
        }
    });
});





module.exports = router;