import React from 'react';

function EmailUs() {
    return (
        <section className="hero is-small email-feature-background">
            <div className="hero-body">

            <div className="email-text">
              <h4 className="header-subtitle2">have you been searching for</h4>
            <h1 className="header-title2">a community with black girl magic who appreciate all things otaku?</h1>
  
            </div>
            
            <div className="form d-flex justify-content-center align-items-center-center ">
            <div className="control form-outline justify-content-center" style={{ float: 'left' }}>
            <div class="control">
            <input class="input" type="text" placeholder="Enter Your Name"/>
            </div>
            </div>

            <div className="form-outline justify-content-center" style={{ float: 'left' }}>
            <div class="control">
            <input class="input" type="text" placeholder="Enter Your Email"/>
            </div>
            </div>

            <button type="button" className="btn btn-secondary justify-content-center" >Add Me to the List!</button>
            </div>
            
            </div>

        </section>
    )
}

export default EmailUs;