import React from 'react';
import BlackAnimeGirl from '../images/blackanimegirlqueen.gif';
import FreeBlackGirl from '../images/freeblackgirl.jpg';

class LuxePage extends React.Component {
    render() {
        return (
            <div>

                    <section className="hero is-medium is-black">
                    <div className="hero-body">
                        <div className="container">
                            
                        <h2 className="header-subtitle">
                            Welcome to Feminaku Luxe 
                        </h2>

                        <h1 className="header-title">
                            For Those Who Want To Experience Everything
                        </h1>
                        <h2 className="header-subtitle">
                            This gives you everything from every package <br/> to ensure you get the full experience in Feminaku.
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
                            Perks from both Prime and Wonder Packages
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            You'll receive all the benefits from our Prime and Wonder Packages along with the ability to downgrade your service
                            based on your needs.
                            </h4>
                            <h2 className="header-subtitle-third">
                            One-Year Feminaku Anime Streaming Service Subscription
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            Included within your subscription, you'll be able to have immediate access to our anime streaming service platform where we host our own anime
                            from our studio. 
                            </h4>
                            <h2 className="header-subtitle-third">
                            First Play and Look at New Games from Femme Games Studios
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            In our premier gaming studio, Femme Games Studios, 
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

export default LuxePage;