import {useNavigate} from 'react-router'


import ('./header2.css')


const HeaderTwo = () => {

    const navigate = useNavigate()

    const homeHandler = () => {
        navigate('/')
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }


    return(

        <div className='header_box' id='headerId'>
            <div className='header_left'>
                    <img className='header_logo' 
                    src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669759568/DON_2_no_bg_sm_xum9ss.png' 
                    alt='donichesion_logo'
                    onClick ={homeHandler}
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

export default HeaderTwo