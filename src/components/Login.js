import {  useState  } from 'react';
import HeaderTwo from './header2'
import { useNavigate } from 'react-router';
import axios from 'axios';


import ('./Login.css')

const UserLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const registerHandler = () => {
      navigate('/register')
    }


    const userLogin = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/v1/auths/login',
        {email: username, password: password}
      ).then (result => 
        {
          //save the logged in user in the local storage
          localStorage.setItem('userId', result.data.id);
          navigate ('/dashboard');
          console.log('You have logged in')
        })
      }

    return (

      <div className='login_page'>
        <HeaderTwo/>

      <div className='login_left'>

      <img  className='login_image'
      src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669757961/volunteerno_bg_i0yy17.png'
      alt='login_image'
      />

      </div>


        <div className = 'User-login-container'>

          <h2 className='login_form_title'> SIGN IN  </h2>
        
          <img className='login_logo'
            src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669759568/DON_2_no_bg_sm_xum9ss.png'
            alt='donichesion_logo'
          />



        <form className = 'User-form-container'>
            <label></label> &nbsp;
            <input className = 'User-input-container'
                type = 'text'
                value = {username}
                placeholder = 'e-mail' 
                onChange = {(e) => setUsername(e.target.value)}
                required
            />
            
            <br /> 

            <label></label> &nbsp;
            <input className = 'User-input-container'
                type = 'password'
                value = {password}
                placeholder = 'password' 
                onChange = {(e) => setPassword(e.target.value)}
                required        
            />

            <br />

            <div className = 'User-button-container'>
                <button className = 'User-login-button'
                    onClick = {userLogin}
                    >SIGN IN
                </button>
            </div>

      </form>


      <div className='login_bottom_part'>
        <p> Don't have an account yet? 
          <span className='signup_link'
          onClick={registerHandler}
          > sign up </span></p>
      </div>
      </div>

      

      </div>
      
      
    )
};
  
export default UserLoginPage;

