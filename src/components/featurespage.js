import React from 'react';
import BlerdLogo from './images/blerdcomimage.png';
import UrbanAnimeLouge from './images/urbananimelounge.png';
import BGNLogo from './images/bgnlogo.jpg';

function Features () {
    return (
        <div>
            <h1 className="header-title2">
                our community has been featured in:
            </h1>

            <div className="d-flex justify-content-center align-items-center-center ">

            <div className="featuredimages" style={{ width: '300px' }}>
                <img src={BlerdLogo} className="img-fluid" alt="logo-with-afro-and-colored-glasses"/>
            </div>

            <div className="featuredimages" style={{ width: '300px' }}>
                <img src={UrbanAnimeLouge} className="img-fluid" alt="red-and-black-logo" />
            </div>

            <div className="featuredimages" style={{ width: '300px' }}>
                <img src={BGNLogo} className="img-fluid" alt="red-and-black-logo" />
            </div>

            <div>

            </div>
            </div>
        </div>
    )
}

export default Features;