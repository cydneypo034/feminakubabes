import React from 'react';
import BlackPotterGirls from '../images/blackpottergirls.jpg';
import BlackGirlWithGlasses from '../images/blackgirlglasses.jpg';
import FreeBlackGirl from '../images/freeblackgirl.jpg';
import FeminakuPricing from '../images/feminakuprice.png';
import './homeheader.css';

function HomeHeader() {
    return (
        <div>
            
            <section className="hero is-medium is-black">
            <div className="hero-body">
                <div className="container">

                <h1 className="header-title">
                    A safe, magical space <br /> by us, for us 
                </h1>

                <h2 className="header-subtitle">
                    Enjoy streams, merch, and community <br /> made for the inner otaku in you. 
                </h2>

                <div className="button-size">
                <button type="button" className="btn btn-secondary btn-rounded" href="/pricing">
                    Get Started</button>
                </div>


                </div>
            </div>
            </section>

            <section className="hero is-medium">
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
                    <img src={BlackPotterGirls} alt="black-girl-with-potter-robes" className='who-component-image' />
                        <div className='card-overlay'>Hello</div>
                </div>
                <div className="image-card-two">
                    <img src={BlackGirlWithGlasses} alt="black-girl-with-afro" className='who-component-image' />
                    <div className='card-overlay'>Hello</div>
                </div>
                <div className="image-card-three"> 
                    <img src={FreeBlackGirl} alt="black-girl-with-afro" className='who-component-image' />
                    <div className='card-overlay'>Hello</div>
                </div>
            </div>
            </div>

            <section className='hero is-medium'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='header-title-second'>
                            Sis, you don't have to feel alone again.
                        </h1>
                        <h2 className="header-subtitle-second">
                            Enjoy your membership of merch from your favorite anime and hangout sessions in our thriving community. 
                            Pick which is the best for you.
                        </h2>
                        <div className='membership-photo'>
                            <img src={FeminakuPricing} alt='cards-with-pricing-for-feminaku' className='' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='hero is-medium'>
                <div className='hero-body'>
                    <div className='container'>
                    <h1 className='header-title-second'>
                            See how our other community members use Feminaku.
                    </h1>
                    </div>
                </div>
            </section>

            <section className='hero is-medium'>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='header-title-second'>
                            Ready to join the tribe?
                        </h1>

                        <button type="button" className="btn btn-secondary btn-rounded footerbutton" href="/pricing">
                        Get Started</button>
                    </div>
                </div>
            </section>
    </div>
    )
}

export default HomeHeader;