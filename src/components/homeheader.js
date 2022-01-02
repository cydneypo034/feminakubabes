import React from 'react';
import BlackGirlAfro from './images/blackgirlwithafro.jpg';
import FreeBlackGirl from './images/blackgirlrichness.jpg'

function HomeHeader() {
    return (
        <div>
            
            <section className="hero is-medium is-white">
            <div className="hero-body">
                <div className="container">

                <h1 className="header-title">
                    A safe, magical space <br /> by us, for us 
                </h1>

                <h2 className="header-subtitle">
                    Enjoy streams, merch, and community <br /> made for the inner otaku in you. 
                </h2>

                <div className="button-size">
                <button type="button" className="btn btn-secondary btn-rounded" href="/user">
                    Get Started</button>
                </div>


                </div>
            </div>
            </section>

            <section className="hero is-medium ">
            <div className="hero-body">
                <div className='container'>
                    <h1 className='header-title-second'>
                    What's Feminaku?
                    </h1>
                    <h2 className="header-subtitle-second">
                    Feminaku is a combination 
                    of the word feminine and otaku, a Japanese term for people with obsessive 
                    interests, particularly in anime and manga. Feminaku exists as a community for 
                    black girls who are otaku's to their core to network, be seen, loved and celebrated. 
                    </h2>
                </div> 
            </div>
            </section>

            <div className="who-component-body">
            <div className="header-title-second">Who's using Feminaku?</div>
            <div className="card-wrapper">
                <div className="image-card-one">
                    <img src={BlackGirlAfro} alt="black-girl-with-afro" className='who-component-image' />
                </div>

                <div className="image-card-two">
                    <img src={FreeBlackGirl} alt="black-girl-with-afro" className='who-component-image' />
                </div>

                <div className="image-card-three"> 
                    <img src={BlackGirlAfro} alt="black-girl-with-afro" className='who-component-image' />
                </div>
            </div>
            </div>
    </div>
    )
}

export default HomeHeader;