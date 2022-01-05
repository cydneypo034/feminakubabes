import React from 'react';
import './pricing.css';

function Memberships() {
    return (

        <div className="container">
            <h1 className="header-title-second">choose how you'd like to thrive</h1>
            <h2 className="header-subtitle-second">
                It's free to get started. You'll receive membership perks immediately upon signing up
                and can upgrade or downgrade your subscription at any time.
            </h2>
            <div class="columns is-multiline">
            
            <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <h1 className="header-title-second">
                            prime
                            </h1>
                            <h6 className="header-subtitle-second">
                                The simple plan with great value.
                            </h6>
                            <h3 className="header-subtitle-second">
                            $15/month
                            </h3>

                            <hr/>

                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Members ONLY Workshops and Lives Access with Replays Available</div>
                            </span>
                            <hr />

                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Early Access to Community Events</div>
                            </span>
                            <hr />

                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>The "FemmeBabe" Merch Box with Black-owned businesses featured</div>
                            </span>
                            <hr />

                            <button type="button" className="btn btn-secondary btn-rounded" href="/">go prime</button>
                            <hr/>

                        </div>
                    </div>
                </div>

            <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <h1 className="header-title-second">
                            wonder
                            </h1>
                            <h6 className="header-subtitle-second">
                                a plan with a bit more magic.
                            </h6>
                            <h3 className="header-subtitle-second">
                            $25/month
                            </h3>

                            <hr/>

                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Everything from the prime package and...</div>
                            </span>
                            <hr/>
                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Upgrade to VIP for Community Events</div>
                            </span>
                            <hr/>
                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>**15% off Feminaku Anime Streaming Service for one year</div>
                            </span>
                            <hr/>
                        
                            <button type="button" className="btn btn-secondary btn-rounded" href="/">let's wonder</button>

                            <hr/>
                            <div style={{fontSize: '10px', padding: '10px'}}>**This applies to the FemmeBabe Unlimited Subscription plan ONLY.</div>

                        </div>
                    </div>
                </div>
                

                <div class="card">
                    <div class="card-content">
                        <div class="content">
                            <h1 className="header-title-second">
                            luxe
                            </h1>
                            <h6 className="header-subtitle-second">
                                The most magical plan of them all.
                            </h6>
                            <h3 className="header-subtitle-second">
                            $35/month
                            </h3>

                            <hr/>

                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Everything from the wonder package and...</div>
                            </span>
                            <hr/>
                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>Early Vote of FemmeBabe Box</div>
                            </span>
                            <hr/>
                            <span class="icon-text">
                            <span class="icon">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <div>First Look and Play of New Games from Femme Games Studios </div>
                            </span>
                            <hr/>
                        
                            <button type="button" className="btn btn-secondary btn-rounded" href="/">go luxe</button>

                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Memberships;