import React from 'react';
import '../memberships/membership.css';

function Memberships() {
    return(

        <div className="container">
           <div className="header-title-second">choose how you'd like to thrive</div>
           <h2 className="header-subtitle-second">
                It's free to get started. You'll receive membership perks immediately upon signing up
                and can upgrade or downgrade your subscription at any time.
            </h2>
            <div className="card-wrapper">
 
            <div className="card">
                <div className="container">
                    <h1 className="header-title-second">
                   prime
                    </h1>
                    <h6 className="header-subtitle-second">
                        The simple plan with great value.
                    </h6>
                </div>
                <div className="btn-text">
                <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Notifications of New Blog Posts Releases</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Members ONLY Private Facebook Group Access</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>FemmeBabe Box Included</div>
                    </span>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Early Access to Community Events</div>
                    </span>
                    <br/>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">select</button>
                </div>
               
                </div>
 
                <div className="card">
                <div className="container">
                    <h1 className="header-title-second">
                    wonder
                    </h1>
                </div>
                <div className="btn-text">
                <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Everything from Wonder and...</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Entered to Win Free New Merch</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Q&A access during FB + Youtube Lives</div>
                    </span>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Notifications of New Blog Posts Releases</div>
                    </span>
                    <br/>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">select</button>
 
                </div>
                </div>
 
 
                <div className="card">
                   
                <div className="container">
                    <h1 className="header-title-second">
                    luxe    
                    </h1>
                </div>
               
                <div className="btn-text">
                    <br/>
                <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Everything from the PrimeBae Package</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Shoutout in All Youtube Videos</div>
                    </span>
                    <br/>
                    <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-check-square"></i>
                    </span>
                    <div>Feminaku Merch Box Subscription Service</div>
                    </span>
                    <button type="button" className="btn btn-secondary btn-rounded" href="/">select</button>
                </div>
                </div>
                   
 
                </div>
        </div>

    )
}

export default Memberships;