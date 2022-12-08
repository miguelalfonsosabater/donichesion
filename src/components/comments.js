import React from 'react'



import ('./comments.css')

const Comments = ({user, body}) => {




  return (
    <section>
      <div className='comment-box'>
        <div className='comment-user-details'>

        <img 
        className='commentImage' 
        src={user.image} 
        alt='user'
        />
        <div>
        <div className='comment-username'> {user.firstName} {user.lastName}</div>

        <p className='comment-section'> 
            {body}
        </p>
        </div>

        </div>

      </div>
    </section>
  )
}

export default Comments;