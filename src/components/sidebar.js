import {useState} from 'react'
import {useNavigate} from 'react-router'

import PostFormpage from './PostForm'


import('./sidebar.css')


const SideBar = () => {

    const navigate = useNavigate();

    const onLogoutHandler = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        localStorage.clear();
        navigate('/login')
    }


    const dashboardHandler = (e) => {
        e.preventDefault()
        navigate('/dashboard')
    }

    const profileHandler = (e) => {
        e.preventDefault()
        navigate('/profile')
    }


    const [displayCreate, setDisplayCreate] = useState(false)


    const onClickdisplayCreatePost = () => {
        if( displayCreate === false ){
            setDisplayCreate( true )
        } else {
            setDisplayCreate(false)
        }

    }



    return (



        <div className='sideBar_box'>
            <div className='sidebar_home'>
                <img className='sidebar_icon' src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669805426/DONATE_ICON_2_qn6cdj.png'  alt='donateicon'   /> 
                <h2 onClick={dashboardHandler}> DONATE </h2>
            </div>

            <div className='sidebar_profile'>
            <img className='sidebar_icon' src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669750378/PROFILEICON_set2jy.png'  alt='profileicon'   />
                <h2
                onClick={profileHandler}> PROFILE </h2>
            </div>

            <div className='sidebar_createPost'>
                <button 
                onClick={onClickdisplayCreatePost}> CREATE POST </button>
            </div>



            <div className='sidebar_logout'>
                <button
                    onClick={onLogoutHandler}
                
                >LOGOUT</button>
            </div>

            { displayCreate && <PostFormpage 
                onClickdisplayCreatePostProps = {onClickdisplayCreatePost}
            />}



        </div>
    )
}


export default SideBar