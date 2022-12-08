import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import HeaderTwo from './header2'



import('./Register.css')


const UserRegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const loginHandler = () => {
        navigate('/login')
    }



    const submitInfo = () => {
        if( firstName === '' || lastName === '' || email === '' || password === '' || contactNumber === '' || image === ''){
                alert('fillout all boxes!')
            return
        }

        axios.post('http://localhost:8000/api/v1/auths/register',
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                image: image,
                contactNumber: contactNumber
            }
        )
        alert(`New Account Added`);
        navigate('/login')
    }

    return (

        <div className='user_register_container'>
            <HeaderTwo/>


            <div className='user_register_left'>
                <img className='register_image'
                    src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669769533/NEW_GREEN_USER_REG_rh5652.png'
                    alt='register_image'
                />
            </div>



            <div className='user_register_right'>

                <div className='user-form-container'>

                <h2 className='register_form_title'> SIGN UP </h2>

                    <form className='user-form'
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}>


                        <input
                            className='register_input'
                            required
                            type='text'
                            value={firstName}
                            placeholder='first name'
                            onChange={(e) => setFirstName(e.target.value)}
                        />


                        <input
                            className='register_input'
                            required
                            type='text'
                            value={lastName}
                            placeholder='last name'
                            onChange={(e) => setLastName(e.target.value)}
                        />


                        <input
                            className='register_input'
                            required
                            type='email'
                            value={email}
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <input
                            className='register_input'
                            required
                            type='password'
                            minlength='8'
                            value={password}
                            placeholder='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />



                        <input
                            className='register_input'
                            required
                            type='tel'
                            minlength='11'
                            value={contactNumber}
                            placeholder='contact number'
                            onChange={(e) => setContactNumber(e.target.value)}
                        />



                        <input
                            className='register_input'
                            required
                            type='url'
                            value={image}
                            placeholder='image url'
                            onChange={(e) => setImage(e.target.value)}
                        />


                        <div className='Button-container'>
                            <button className='submit-button'
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault();
                                    submitInfo();

                                }}
                            >SIGN UP
                            </button>
                        </div>

                        <div className='register_bottom_part'>
                            <p> Already have an account?
                                <span className='signin_link'
                                    onClick={loginHandler}
                                > sign in </span>

                            </p>
                        </div>



                    </form>
                </div>


            </div>




        </div>





    )
}

export default UserRegisterPage;
