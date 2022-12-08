const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const server = express()
const port = 8000


// run the middlewares
server.use( bodyParser.json() )
server.use( morgan('dev'))
server.use(cors())
server.use(helmet())


// set routes
const UserRouter = require('./routes/users')
const AuthenticationRouter = require('./routes/auth')
const PostRouter = require('./routes/posts')
const CommentRouter = require('./routes/comments')
const DonationRouter = require('./routes/donations')


// mongoose connect
mongoose.connect('mongodb+srv://donichesion:yi3FPzCG6MjXZmuA@dp-niche-sion.bzacdb7.mongodb.net/?retryWrites=true&w=majority')


server.get('/', (request,response) => {
    response.send('Welcome!')
})

// routes 
server.use('/api/v1/users', UserRouter)
server.use('/api/v1/auths', AuthenticationRouter)
server.use('/api/v1/posts', PostRouter)
server.use('/api/v1/comments', CommentRouter)
server.use('/api/v1/donations', DonationRouter)


server.listen(port, ()=>{
    console.log(`server running on port: ${port}`)
})