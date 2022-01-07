import React from 'react';
import PaymentsOptions from '../images/payments.png';
import './pricing.css';

function Memberships() {
    return (
        <div>

        <section class="hero is-small">
        <div class="hero-body">        
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
        </div>
        </section>
            
        
        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <h1 class="header-title-second">
                        What can come in your plan?
                    </h1>
                    <h2 className="header-subtitle-second">
                    No matter which plan you choose, there's always going to something for everyone.
                    All plans include the ability to:
                    </h2>
                    
                    <div class="card-wrapper">
                       <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                    Upgrade or Downgrade Your Plan
                                </h1>
                                <p className='card-subtitle-second'>
                                    Your plans will come with the power to choose. You can upgrade or downgrade your plan at any time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                    Interact with Worldwide Community
                                </h1>
                                <p className='card-subtitle-second'>
                                    Join over 10,000+ FemmeBabes both online and in-person with our community events.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                    Pause or Skip Months in Your Plan
                                </h1>
                                <p className='card-subtitle-second'>
                                    You can pause and restart your plan at any time. We won't charge you extra fees in the process.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                            <h1 class="card-title-first">
                                    Shop Small and Black-Owned
                                </h1>
                            <p className='card-subtitle-second'>
                                    No matter what plan you invest in, you'll be supporting small and black-owned businesses.
                                </p>
                            </div>
                        </div>
                    </div>  
                    </div>      
                </div>
            </div>
        </section>

        <section class="hero is-medium">
            <div className="container">
            <hr/>
            <h1 className='header-title-second'>About payment processing plans</h1>
            <h2 className="header-subtitle-second">Payment processing fees cover the cost of all the things we 
            do behind the scenes to ensure you have the best experience in the Feminaku platform.</h2>
            <div className="payment-options">
                <img src={PaymentsOptions} alt='list-of-payment-options' 
                className='payments-cards-image'/>
            </div>

            <div className="card-wrapper">
                <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                    Multiple Payment Methods.
                                </h1>
                                <p className='card-subtitle-second'>
                                    We accept Visa, Mastercard, American Express, Discover, and Paypal for payment methods.
                                </p>
                            </div>
                        </div>
                </div>

                <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                Recurring Billing Monthly.
                                </h1>
                                <p className='card-subtitle-second'>
                                We charge your debit or credit card on file every month and you have the chance to up or downgrade.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="second-card">
                        <div class="card-content">
                            <div class="container">
                                <h1 class="card-title-first">
                                    International Surcharge Fee.
                                </h1>
                                <p className='card-subtitle-second'>
                                    For all payments of FemmeBabes outside of the US using Paypal, there is an additional 1% surcharge.
                                </p>
                            </div>
                        </div>
                    </div>     
            </div>
            <br/>
             <hr/>
            </div>   
        </section>

        <section className='hero is-medium'>
            <div className='hero-body'>
                <div className='container'>
                <h1 className="header-title-faqs">
                    FAQ's 
                </h1>
                <hr/>
                <h2 className='header-subtitle-faqs'>
                    Who is Prime for?
                </h2>
                <h2 className='subtitle-faqs'>
                    Prime is for those who simply want to enjoy the perks of a community,
                    support black-owned businesses in our FemmeBabe Merch box, and 
                    aren't needing the benifits of the other tiers. Learn More
                </h2>
                <hr/>
                <h2 className='header-subtitle-faqs'>
                    Who is Wonder for?
                </h2>
                <h2 className='subtitle-faqs'>
                    Wonder is for those who want the perks of Prime with additional benefits of the community and merchandise,
                    want to enjoy anime on our personal streaming platform,
                    and aren't needing the benefit of gaming from our gaming studio. Learn More
                </h2>
                <hr/>
                <h2 className='header-subtitle-faqs'>
                    Who is Luxe for?
                </h2>
                <h2 className='subtitle-faqs'>
                    Luxe is for those who want to enjoy every aspect of the Feminaku experience of community,
                    merch, an anime streaming service, and first plays from our gaming studio. Learn More
                </h2>
                <hr/>
                <h2 className='header-subtitle-faqs'>
                    How easily can you upgrade and downgrade plans?
                </h2>
                <h2 className='subtitle-faqs'>
                    Switching between plans and pausing them is extremely easy to do! This would require you
                    going to the settings of your account and choosing an option in the billing and subscription section
                    of whether you'd like to upgrade, downgrade, pause or cancel. If you cancel, we do require you make these changes before
                    loosing your points from months skipped prior.
                </h2>
                <hr/>
                <h2 className='header-subtitle-faqs'>
                    Can I cancel at anytime?
                </h2>
                <h2 className='subtitle-faqs'>
                    We'd hate to see you go, but you're more than welcome to cancel at anytime. This would require you
                    going to the settings of your account and choosing the option in the billing and subscription section
                    to cancel your subscription. We do require you cancel before loosing your points from months prior.
                </h2>
                <hr/>
                </div>
            </div>
        </section>

        <section className='hero is-medium' style={{backgroundColor: 'lightgrey'}}>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='header-title-second'>
                            Join the 10,000+ black women thriving in our Otaku community.
                        </h1>

                        <button type="button" className="btn btn-secondary btn-rounded footerbutton" href="/pricing">
                        Get Started</button>
                    </div>
                </div>
            </section>   

        </div>

    )
}

export default Memberships;