import React, { Fragment } from 'react';
import ThreeOffers from './featurespage';
import FemParallax from './FEMparallax.js';
import EmailUs from './EmailUs.js';
import Reviews from './reviews.js';
import History from './history.js';

function HomeHeader() {
    return (
        <div>
            
            <section className="hero is-large has-bg-img">
            <div className="hero-body">
                <div className="container">
                <h1 className="header-title">
                    welcome to feminaku &#9734; <br />
                </h1>
                <h2 className="header-subtitle">
                    the magical hub for black otaku girls 
                </h2>
                <Fragment>
                <div className="button-size">
                <button type="button" className="btn btn-secondary btn-rounded" href="/user">Newsletter Sign Up</button>

              </div>
              </Fragment>
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
            <FemParallax />
            <History />
            <Reviews />
            <ThreeOffers />
            <EmailUs />
        </div>
    )
}

export default HomeHeader;