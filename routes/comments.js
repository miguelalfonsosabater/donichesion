const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const Comment = require('../models/Comment')



// edit comment
router.put('/edit/:id', (request, response)=>{
    const commentId = request.params.id
    Comment.updateOne(
        {_id: commentId},
        { $set : {...request.body}}
    ).then (result =>{
        if (result.modifiedCount === 1 ){
            response.status(200).send({ status: 'Comment Updated Successfully'})
        }
    })
})


// add comment
router.post('/add', async (request, response) => {
    const post = new Comment(request.body)
    await post.save()
    .then(result => {
        Post.updateOne(
            {_id : request.body.postId},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(post))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})


// Delete a Comment 
router.delete('/delete/:id', (request,response)=>{
    Comment.deleteOne({_id: request.params.id})
    .then(result => {
        if (result.deletedCount === 1 ){
            response.send({status:'Comment removed'})
    } else {
        response.send({status:'Error occured cannot delete'})
        return 
        }
    })
})


module.exports = router
