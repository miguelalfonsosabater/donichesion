import React from 'react'

// Styling 
import '../pages/WhoWeAre.css'

const WhoWeAre = () => {
return (
    <div className='main-container'>
        <h1 className='heading-1'>WHO WE ARE</h1>
        <div className='who-we-are'>
            <div className='who-we-banner'>
                <img src='https://res.cloudinary.com/dastgstj8/image/upload/v1669787668/who-we-are_wxldwu.png'/>
            </div>

            <p>
                We are the non-profit organization whose solely purpose is to 
                support all Filipinos. Illustration of optimism that depicts and
                describes the difficulties and hardships battled by a Filipino. We
                aim to continue our mission and passion for serving the Filipino people
                while helping to promote social welfare.
            </p>
        </div>


        <div className='mission-vision'>
            <h2> Our Mission </h2>
            <p>
                To improve the lives of Filipino people and
                the efficiency of humanitarian services.
            </p>

            <h2> Our Vision </h2>
            <p>
                To serve and provide the best support for 
                every Filipinos. 
            </p>
        </div>


        <div className='story-dream'>
            <div className='story'>
                <h2> Our Story </h2>
                <p>
                    The beginning of Do-Niche-sion was basically a simple project
                    brainstorming that founded by 3 passionate young developers in the year 2022.
                    The main purpose of this website is to create a platform where all Filipino people
                    could gather in one place to give support, assistance, share the love by the means of donating. 
                </p>
            </div>
            
            <div className='dream'>
                <h2> Our Dream </h2>
                <p>
                    We dream to become the leading non-profit organization in the Philippines.
                    Providing the best support for every Filipino. As we take the modern approach 
                    of giving, donating and sharing the love and affection. Together we Rise, together
                    we serve for the betterment, we are working towards fulfilling this dream.
                </p>
            </div>
        </div>

        <h2> Our Team </h2>
        <div className='our-team'>

            <div className='developer'>
                <img src='https://res.cloudinary.com/dastgstj8/image/upload/v1669797948/Lead_Director_ksjlxd.png'/>
                <h3>Miguel Sabater</h3>
                <h4> Lead Developer and Graphic Designer </h4>
                <p>
                    Miguel holds a Business Administration degree and
                    has an extensive background as a Graphic Designer that 
                    led him to become a freelancer, where he found clients
                    internationally. He is also passionate in building websites that
                    enables to create a better community.
                </p>
            </div>

            <div className='developer'>
                <img src='https://res.cloudinary.com/dastgstj8/image/upload/v1669797962/Miss_Ramy_Communication_oyjdg2.png'/>
                <h3>Ramichelle Maguigad</h3>
                <h4> Operations Specialist and Developer </h4>
                <p>
                    Ramichelle keeps the trains moving by contributing significantly to a number of everyday initiatives and activities.
                    by assisting in the multi-level coordination of our daily work. When she isn't working, she can be found in the kitchen 
                    experimenting with different cuisines.
                </p>
            </div>

            <div className='developer '>
                <img src='https://res.cloudinary.com/dastgstj8/image/upload/v1669797933/JuliusEditor_wp4t7l.png'/>
                <h3>Julius Pasiliao</h3>
                <h4> Marketing Specialist and Developer </h4>
                <p> 
                    Julius is a web developer and holds a BS in Computer Science.
                    He enjoys graphic and web design and gets a thrill out of building websites. 
                    When he isn't working he read fiction and self-help books. He also enjoys travel and
                    photography. 
                </p>
            </div>
        </div>

        <div className='work-with-us'>
            <h2> Work with us </h2>
            <p>
                We invite you to become part of Leading Humanitarian Service in the 
                Philippines. Let's work together to bring about change that will affect 
                other people's lives.
            </p>
        </div>
    </div>
)
}

export default WhoWeAre;