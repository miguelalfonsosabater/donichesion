import {useNavigate} from 'react-router'


import ('./header.css')


const Header = () => {

    const navigate = useNavigate()

    const dashBoardHandler = () => {
        navigate('/dashboard')
    }


    return(

        <div className='header_box' id='headerId'>
            <div className='header_left'>
                    <img className='header_logo' 
                    src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669759568/DON_2_no_bg_sm_xum9ss.png' 
                    alt='donichesion_logo'
                    onClick ={dashBoardHandler}
                    />

            </div>
            <div className='header_right'>

                {/* <ul className='header_ul'>
                    <li className='header_li'>
                            WHO WE ARE
                    </li>
                    <li className='header_li'>
                            WHAT WE DO
                    </li>
                    <li className='header_li'>
                            MAKE AN IMPACT
                    </li>
                </ul> */}

            </div>
        </div>
    
    )
}

export default Header