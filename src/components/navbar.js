import React from 'react';

function NavbarPage() {
  return (    
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a role="button" className="navbar-burger" aria-label="menu" 
          aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              HOME
            </a>

            <a href="/memberships" className="navbar-item">
              MEMBERSHIPS
            </a>

            <a href="/about-us" className="navbar-item">
              ABOUT US
            </a>

            <a href="/contact-us" className="navbar-item">
              CONTACT
            </a>

            
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/" className="button is-white">
                  <strong>SIGN UP</strong>
                </a>
                <a href="/" className="button is-light">
                  LOG IN
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
            </div>
    );
}

export default NavbarPage;