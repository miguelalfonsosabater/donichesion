
import { useState, useEffect } from 'react'
import axios from 'axios'
import Comments from './comments';
import CommentFormPage from './Comment'
import DonateCard from './DonateCard';
import Donors from './donor';

import './StoryPage.css'


const StoryPage = ({ post, onClickDisplayPostProps }) => {

    const [comments, setComments] = useState(post.comments)
    const [donations, setDonations] = useState([])
    const [displayDonate, setDisplayDonate] = useState(false)



    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/donations/${post._id}`).then(result => {
            setDonations(result.data)
        })

    }, [])


    const onClickdisplayDonate = () => {
        if (displayDonate === false) {
            setDisplayDonate(true)
        } else {
            setDisplayDonate(false)
        }
    }



    return (

        <div className='storypage-Container'>


            <div className='StoryContainer'>
                <h2 className='StoryPage-close' onClick={onClickDisplayPostProps}>X</h2>

                <div className='storyLeft'>
                    <div className='storycard-top'>
                        <img className='storycard-user-profilepic'
                            src={post.author.image}
                            alt='user-profile-pic'
                        />
                        <div className='story-user-profile-details-container'>
                            <h3 className='story-user-profile-name'>
                                {post.author.firstName} {post.author.lastName}
                            </h3>

                            <h4 className='story-user-profile-email'>
                                {post.author.email}
                            </h4>

                        </div>
                    </div>




                    <img
                        className='storyPage-image'
                        src={post.image}
                        alt={post.title}
                    />

                    <div className='storyPage-story-need'>
                        <div className='story-purpose-fund'>
                            <h3 className='storyPage-fund-needed'> PURPOSE: <span className='storyPage-span'> {post.purpose}  </span> </h3>

                        </div>


                    </div>


                    <div className='storyPage-story-need'>
                        <div className='story-purpose-fund'>
                            <h3 className='storyPage-fund-needed'> NEEDED: <span className='storyPage-span'>
                                {post.fundNeeded.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'PHP',
                                })}</span> </h3>

                        </div>

                        {/* <div className='story-purpose-fund'>
                            <h3 className='storyPage-fund-needed'> ACCUMULATED: 
                            {donations.donationAmount}

                            <span className='storyPage-span'>
                                </span> </h3>

                        </div> */}


                    </div>






                    {/* donations here */}

                    {displayDonate && <DonateCard
                        key={post.title}
                        postId={post._id}
                        onClickdisplayDonateProps={onClickdisplayDonate}
                    />}

                    <button className='StoryPage-btn-right'
                        onClick={onClickdisplayDonate}>
                        DONATE
                    </button>

                    <div className='listOfDonations'>

                        {donations.map(donation => {
                            if (donation.postId === post._id)
                                return <Donors
                                    donation={donation}

                                />
                        })}

                    </div>

                </div>


                <div className='storyRight'>

                    <h2 className='StoryPage-title'>Title: {post.title}</h2>

                    <p className='StoryPage-body'>
                        {post.body}
                    </p>

                    <CommentFormPage
                        post={post}


                    />

                    {comments.map(comment => {
                        return <Comments
                            key={comment.body}
                            user={comment.author}
                            body={comment.body}
                        />
                    })}


                </div>

            </div>

        </div>

    )
}


export default StoryPage