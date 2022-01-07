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

            <section>
                <h1 className='header-title-second'>Who's using Feminaku?</h1>
                <div className='columns'>
                    
                    <div className='column'>
                        <div className='card'>
                            <img src={BlackPotterGirls} alt='black-girls-dressed-in-harry-potter-robes' className='who-component-image'/>

                            <div className='overlay'>
                                <div className='card-content'>
                                    <div className='media-content'>
                                        <p className='header-title-second-white'>All Houses in the Wizarding World and are K-pop stans</p>
                                    </div>
                                    <div className='content'>
                                        <p className='header-subtitle-second-white'>
                                            No matter if you're in a Hogwards House or in the BTS army, you're more than welcome. 

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src={BlackGirlWithGlasses} alt='black-girl-dressed-in-glasses' className='who-component-image'/>

                            <div className='overlay'>
                                <div className='card-content'>
                                <div className='media-content'>
                                        <p className='header-title-second-white'>Manga Lovers and </p>
                                    </div>
                                    <div className='content'>
                                        <p className='header-subtitle-second-white'></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img src={FreeBlackGirl} alt='black-girl-sitting-on-stairs' className='who-component-image'/>

                            <div className='overlay'>
                                <div className='card-content'>
                                <div className='media-content'>
                                        <p className='header-title-second-white'></p>
                                    </div>
                                    <div className='content'>
                                        <p className='header-subtitle-second-white'></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

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