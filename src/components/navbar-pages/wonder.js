import React from 'react';
import BlackAnimeGirl from '../images/blackanimegirlqueen.gif';
import FreeBlackGirl from '../images/freeblackgirl.jpg';

class WonderPage extends React.Component {
    render() {
        return (
            <div>

                    <section className="hero is-medium is-black">
                    <div className="hero-body">
                        <div className="container">
                            
                        <h2 className="header-subtitle">
                            Welcome to Feminaku Wonder 
                        </h2>

                        <h1 className="header-title">
                            For Those Who Want a Glow-Up
                        </h1>
                        <h2 className="header-subtitle">
                            This goes beyond the basics and give you <br/> even more exclusive specials for you to enjoy.
                        </h2>
                        <br/>
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
                        <img src={BlackAnimeGirl} alt="gif-drawing-of-black-girl-in-anime-form" className="image-float" />

                            <h1 className='header-title-third'>
                            Membership Essentials
                            </h1>
                            <h2 className="header-subtitle-third">
                            Prime Package Perks Included
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            You'll receive all the benefits from our Prime Package along with the ability to upgrade 
                            to Luxe or downgrade back to Prime based on your needs.
                            </h4>
                            <h2 className="header-subtitle-third">
                            Upgrade to VIP Status for Community Events
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            You'll immediately be upgraded for the VIP status when invited to our community events. This means you'll
                            have access to when tickets go on sale and have the chance to gain access to standard and VIP tickets.
                            </h4>
                            <h2 className="header-subtitle-third">
                            One-Year Feminaku Anime Streaming Service Subscription
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            You'll be able to have immediate access to our anime streaming service platform where we host our own anime
                            from our studio. 
                            </h4>
                        </div> 
                    </div>
                    </section>

                    <section className="hero is-medium">
                    <div className="hero-body">
                        <div className='container'>
                            <img src={FreeBlackGirl} alt='black-girl-sitting-on-stairs' className='image-float-second' />
                        
                        <h2 className='header-title-third'>
                            My favorite thing about Feminaku is the community and the amount of time they put into
                            making sure we all feel welcomed. The culture they've made for what a community should be is
                            unlike any community I've been apart of online.
                        </h2>
                        <h2 className="header-subtitle-third">
                            Traylor Standford, Ventura, California
                        </h2>
                        </div>
                    </div>
                    </section>

                    <section className='hero is-medium' style={{backgroundColor: 'lightgrey'}}>
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
}

export default WonderPage;