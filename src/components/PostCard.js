import { useState, useEffect } from 'react';

import DonateCard from './DonateCard'

import StoryPage from './StoryPage';



import('./PostCard.css')

const PostCard = ({ post }) => {

  const [displayPost, setDiplayPost] = useState(false)
  const [displayDonate, setDisplayDonate] = useState(false)


  const onClickDisplayPost = () => {
    if (displayPost === false) {
      setDiplayPost(true)
    } else {
      setDiplayPost(false)
    }
  }

  const onClickdisplayDonate = () => {
    if (displayDonate === false) {
      setDisplayDonate(true)
    } else {
      setDisplayDonate(false)
    }

  }




  return (
    <div className='post-card-container'>

      <div className='postcard-top'>
        <img className='postcard-user-profilepic'
          src={post.author.image}
          alt='user-profile-pic'
        />
        <div className='user-profile-details-container'>
          <h3 className='user-profile-name'>
            {post.author.firstName} {post.author.lastName}
          </h3>

          <h4 className='user-profile-email'>
            {post.author.email}
          </h4>

        </div>


      </div>

      <h2 className='postcard-title'> Title: {post.title} </h2>


      <div className='postcard-mid'>

        {/* <p className='postCard-story'>
            {body}
          </p> */}

        <img className='postcard-story-image'
          src={post.image}
          alt={`${post.title}illustration`}        />
        <div className='postcard-story-need'>
          <div className='purpose-fund'>
            <h3 className='postcard-fund-needed'> PURPOSE: </h3>
            <span className='postcard-span'> {post.purpose}  </span>
          </div>

          <div className='purpose-fund'>
            <h3 className='postcard-fund-needed'> FUND NEEDED: </h3>
            <span className='postcard-span'> {post.fundNeeded.toLocaleString('en-US', {
          style: 'currency',
          currency: 'PHP',
        })}</span>
          </div>
        </div>


      </div>

      <div className='postcard-bottom'>
        <button className='postcard-btn-left'
          onClick={ ()=> {
            onClickDisplayPost()
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
          }
          }

          
        >
          READ STORY
        </button>

        <button className='postcard-btn-right'
          onClick={onClickdisplayDonate}>
          DONATE
        </button>
      </div>




      {/* { displayComment && <div className='postcard-comments'>
        <CommentFormPage
          postId={postId}
        
        />

        {comments.map( comment => {
          return <Comments
            user = {comment.author}
            body = {comment.body}
          />
        })}
      </div>} */}


      { displayPost && <StoryPage
          key={post.title}
          post={post}
          onClickDisplayPostProps={onClickDisplayPost}
        />
      }



      {displayDonate && <DonateCard
        key={post.title}
        postId={post._id}
        onClickdisplayDonateProps={onClickdisplayDonate}
      />}



    </div>
  )
}

export default PostCard;