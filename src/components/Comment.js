import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router'
import axios from 'axios'

import ('./Comment.css')

const CommentFormPage = ({post}) => {

    const navigate = useNavigate()

    const [body, setBody] =  useState('');
    const [author, setAuthor] = useState('');


    useEffect(() => {
        const authorLocal = localStorage.getItem('userId');
            setAuthor(authorLocal);
        }, []);


    const submitComment = () => {
        if(body === ''){
            return
        }
        axios.post('http://localhost:8000/api/v1/comments/add', {
            body: body,
            author: author,
            postId: post._id
        })
        alert(`New Comment Added`);
    }






    return(
        <div className = 'comment-form-container'>
            <form className = 'comment-form'>
                <label> </label> <br /> &nbsp;
                    <textarea 
                        cols = '55' 
                        rows ='3'
                        className='comment-textarea'
                        value = {body}
                        onChange = {(e) => setBody(e.target.value)}
                        placeholder='your comment here'
                        required
                    />

                    <div className = 'comment-button-container'>
                    <button 
                        className = 'comment-submit-button'
                        type = 'submit'
                        onClick = {(e) => {
                            submitComment()
                            navigate('/dashboard')
                        }}
                        >Submit
                    </button>
            </div>
            </form>


        </div>
    )
}

export default CommentFormPage;