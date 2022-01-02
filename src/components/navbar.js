import React from 'react';

function NavbarPage() {
  return (    
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a href="/" role="button" className="navbar-burger" aria-label="menu" 
          aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a href="/memberships" className="navbar-link">
                 Memberships
              </a>

              <div className="navbar-dropdown">
                <a href="/prime" className="navbar-item">
                  Prime
                </a>
                <a href="/wonder" className='navbar-item'>
                  Wonder
                </a>
                <a href='/luxe' className='navbar-item'>
                  Luxe
                </a>
              </div>
            </div>

            <a href="/about-us" className="navbar-item">
              About Us
            </a>

            <a href="/contact-us" className="navbar-item">
              Contact
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="control">            
              <div class="control has-icons-left">
                <input className="input" type="text" placeholder="Find a Member" />
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
                </span>
              </div>

              </div>
                
                <a href="/" className="navbar-item">
                  Log In
                </a>
                <button type="button" className="btn btn-secondary btn-rounded" href="/memberships">
                    Join on Feminaku
                </button>
                
            </div>
          </div>


        </div>
      </nav>
            </div>
    );
}

export default NavbarPage;