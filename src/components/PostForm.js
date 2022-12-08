import { useEffect, useState } from 'react';
import axios from 'axios';

import('./PostForm.css')

const PostFormPage = ( {onClickdisplayCreatePostProps}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [fund, setFund] = useState('');
    const [purpose, setPurpose] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const authorLocal = localStorage.getItem('userId');
        setAuthor(authorLocal);
    }, []);



    const submitPost = () => {
        axios.post('http://localhost:8000/api/v1/posts/add', {
            title: title,
            body: body,
            fundNeeded: fund,
            purpose: purpose,
            author: author,
            image: image
        })
        alert(`New Post Added`);
    }

    return (
        <div className='lightbox-container'>

            <div className='post-form-container'>
            <h2 className='CreatePost-title'>  CREATE POST </h2>

            <h2 className='CreatePost-close' onClick={onClickdisplayCreatePostProps}>  X </h2>


            <form className='post-form'>


                <input
                    className='post-input-container'
                    required
                    placeholder='Title'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className='post-input-container'
                    cols='40'
                    rows='10'
                    placeholder='Your Story'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <input
                    className='post-input-container'
                    required
                    placeholder='Amount you need'
                    type='number'
                    value={fund}
                    onChange={(e) => setFund(e.target.value)}
                />


                <select id='donationList'
                    className='post-input-container'
                    onChange={(e) => setPurpose(e.target.value)} >
                    <option> ---PURPOSE--- </option>
                    <option> HEALTH </option>
                    <option> EDUCATION </option>
                    <option> CHARITY </option>
                </select>


                <input
                    className='post-input-container'
                    required
                    placeholder='Image Url'
                    type='url'
                    onChange={(e) => setImage(e.target.value)}
                />

                <div className='post-button-container'>
                    <button className='post-submit-button'
                        type='submit'
                        onClick={(e) => {
                            submitPost();
                        }}
                    >Submit
                    </button>
                </div>


            </form>




        </div>



        </div>

        
    )
}

export default PostFormPage;
