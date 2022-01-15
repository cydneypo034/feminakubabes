import React from 'react';
import BlackAnimeGirl from '../images/blackanimegirlqueen.gif'


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
                        <img src={BlackAnimeGirl} alt="" className="image-float" />

                            <h1 className='header-title-third'>
                            Membership Essentials
                            </h1>
                            <h2 className="header-subtitle-third">
                            Feminaku is a combination 
                            of the word feminine and otaku, a Japanese term for people with obsessive 
                            interests, particularly in anime and manga. Feminaku exists as a community for 
                            black girls who are otaku's to their core to network, be seen, loved and celebrated. 
                            </h2>
                        </div> 
                    </div>


                    </section>


            </div>
        )
    }
}

export default PrimePage;