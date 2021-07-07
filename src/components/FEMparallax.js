import React from 'react';
import { Parallax } from 'react-parallax';
import PurpleTown from './images/purplejapantown.jpg';
import GreenTown from './images/purpleandgreenmoontown.jpg';
import PastelTown from './images/pasteltown.jpg';

function FemParallax() {
    return (
        <div>
            <Parallax
            blur={10}
            bgImage={require('./images/fempastelbckgrnd.png')}
            bgImageAlt="blury pastel pink background with blue & white circles"
            strength={200}>
            
            <div className="card-wrapper">

            <div className="card">
                    <img src={PastelTown} alt="girl by vending machine" className="image"/>
                    <div className="btn-text">
                    <div className="header-subtitle2">join our community of 2,000 members &#9734;</div>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">join the community &#9734;</button>
                    </div>
                </div>

                <div className="card">
                    <img src={PurpleTown} alt="girl in space" className="image"/>
                    <div className="btn-text">
                    <div className="header-subtitle2">spend your coins in our FEMBabe shop &#9734;</div>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">view our merch &#9734;</button>
                    </div>
                    
                </div>


                <div className="card">
                    <img src={GreenTown} alt="girl next to arcade" className="image"/>
                    <div className="btn-text">
                    <div className="header-subtitle2">check out our latest blog post &#9734;</div>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">read the blog &#9734;</button>
                    </div>
                </div>

                </div>

           
            <div style={{ height: '100px' }} />
        </Parallax>
        </div>
    )
}

export default FemParallax;