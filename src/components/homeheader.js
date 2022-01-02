import React from 'react';
import SailorMoonGif from './images/sailor-moon-happy.gif';


function HomeHeader() {
    return (
        <div>
            
            <section className="hero is-medium is-light">
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

                <img src={SailorMoonGif} alt="girl-playing-video-games-in-arcade" className="videoGameGirlBckgrnd" />

                </div>
            </div>
            </section>

            <section className="hero is-medium ">
            <div className="hero-body">
                <h2 className="header-subtitle2">
                Feminaku is a combination 
                of the word feminine and otaku, a Japanese term for people with obsessive 
                interests, particularly in anime and manga. Feminaku exists as a community for 
                 black girls who are otaku's to their core to network, be seen, loved and celebrated. 
                </h2>
                <br/>
                <div className="btn-text2">
                <button type="button" className="btn btn-secondary btn-rounded" href="/user">Click Here to Join Our Community</button>
                </div>
            </div>
            </section>
           
        </div>
    )
}

export default HomeHeader;