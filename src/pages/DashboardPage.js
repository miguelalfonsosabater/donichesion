import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/header'
import SideBar from '../components/sidebar'

import PostCard from '../components/PostCard'


import('./DashBoardPage.css')




const DashboardPage = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/posts/').then(result => {
            console.log(result.data)
            setPosts(result.data)
        })
    }, [])

    return (

        <>

        <Header/>
        <SideBar/>



            {
            posts && <div className='post-card-dashboard-container'>
            {posts.map( (post) => {
                return < PostCard
                    key={post.title}
                    post = {post}
                />
            })
            }
            </div>
        }
        
        
        </>

    )
}


export default DashboardPage