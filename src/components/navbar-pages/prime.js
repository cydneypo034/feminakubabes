import React from 'react';
import BlackAnimeGirl from '../images/blackanimegirlqueen.gif';
import FreeBlackGirl from '../images/freeblackgirl.jpg';



class PrimePage extends React.Component {
    render() {
        return (
            <div>

                    <section className="hero is-medium is-black">
                    <div className="hero-body">
                        <div className="container">
                            
                        <h2 className="header-subtitle">
                            Welcome to Feminaku Prime 
                        </h2>

                        <h1 className="header-title">
                            Basics for Not-So-Basic Babes
                        </h1>
                        <h2 className="header-subtitle">
                            All the basics you'll need for an <br/> enjoyable experience as a Femme Babe.
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
                            Early Access to Community Events Online and In-person
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            Through your online account, you'll be able to stream and attend events, while having early and exclusive 
                            access to behind-the-scenes filming before livestreams 
                            </h4>
                            <h2 className="header-subtitle-third">
                            Members Only Workshops
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            From Hogwarts House crafts to Vision board creations for the New Year, you'll never miss when workshops will
                            be available to attend.
                            </h4>
                            <h2 className="header-subtitle-third">
                            The Exclusive "FemmeBabe" Monthly Merch Box
                            </h2>
                            <h4 className="header-subtitle-fourth">
                            Featuring products from small, black-owned businesses, you'll have the benefit of an automatic subscription
                            to our FemmeBabe Merch Box at a discount apart from the public. 
                            </h4>
                        </div> 
                    </div>
                    </section>

                    <section className="hero is-medium">
                    <div className="hero-body">
                        <div className='container'>
                            <img src={FreeBlackGirl} alt='black-girl-sitting-on-stairs' className='image-float-second' />
                        
                        <h2 className='header-subtitle-fourth'>
                            My favorite thing about Feminaku is the community and the amount of time they put into
                            making sure we all feel welcomed. The culture they've made for what a community should be is
                            unlike any community I've been apart of online. Happy to be here, and can't for what will come next.
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

export default PrimePage;