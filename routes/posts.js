const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Post = require('../models/Post')


// get posts
router.get('/:id', (request, response) => {
    Post.findOne({ _id: request.params.id }).then(result => {
        response.status(200).send(result)
    })
})

// get all post
router.get('/', (request, response) => {
    Post.find().then((result) => {
        console.log(result);
        if (typeof result === 'object') {
            response.send(result);
        }
    });
});

// get all post by slug
router.get('/:slug', (request, response) => {
    Post.findOne({ slug: request.params.slug }).then(result => {
        response.status(200).send(result)
    })
})


// filter post by purpose
router.get('/:purpose', (request, response) => {
    Post.findOne({ purpose: request.params.purpose }).then(result => {
        response.status(200).send(result)
    })
})


// get post by user (this is to show it on the profile page)
router.get('/user/:user_id', (request, response) => {
    Post.find(
        { author: request.params.user_id })
        .then((result) => {
            if (typeof result === 'object') {
                response.send(result);
            }
        });
});



// add post
router.post('/add', async (request, response) => {
    const post = new Post(request.body)
    await post.save()
    .then(result => {
        User.updateOne(
            {_id : request.body.author},
            {$push : {posts : result._id.toString()}}
            )
            .then(() => response.status(204).send(post))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})


// edit post
router.put('/edit/:id', (request, response) => {
    const postId = request.params.id
    Post.updateOne(
        { _id: postId },
        { $set: { ...request.body } }
    ).then(result => {
        if (result.modifiedCount === 1) {
            response.status(200).send({ status: 'Post Updated Successfully' })
        }
    })
})



// this is to popuplate post with comments
router.put('/:postId/comments/:commentId', (request, response) => {
    Post.updateOne(
        { _id: request.params.postId },
        { $push: { comments: request.params.commentId } }
    ).then(result => {
        if (result.modifiedCount === 1) {
            response.send({ status: "Comment has been added to the post" });
        }
    });
}); 



// this is to popuplate post with donations
router.put('/:postId/donations/:donationId', (request, response) => {
    Post.updateOne(
        { _id: request.params.postId },
        { $push: { donations: request.params.donationId } }
    ).then(result => {
        if (result.modifiedCount === 1) {
            response.send({ status: "Donation has been added to the post" });
        }
    });
});



// Delete a Post 
router.delete('/delete/:id', (request, response) => {
    Post.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                response.send({ status: 'Post removed' })
            } else {
                response.send({ status: 'Error occured cannot delete' })
                return
            }
        })
})




module.exports = router
