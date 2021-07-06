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
              Home
            </a>

            <a href="/" className="navbar-item">
              About Us
            </a>

            <a href="/" className="navbar-item">
              Community
            </a>

            <a href="/" className="navbar-item">
              Blog
            </a>

            <a href="/" className="navbar-item">
              Merch
            </a>

            <a href="/" className="navbar-item">
              Contact
            </a>

            
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/" className="button is-white">
                  <strong>Sign up</strong>
                </a>
                <a href="/" className="button is-light">
                  Log in
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