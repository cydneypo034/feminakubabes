import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './components/home/homeheader.js';
import Pricing from './components/pricing/pricing.js';
import AboutUs from './components/about-us.js';
import ContactUs from './components/contact-us.js';
import Footer from './components/footer.js';



export default class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <NavBar />

            <Route exact path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about-us" component={AboutUs}/>
            <Route path="/contact-us" component={ContactUs} />
          
          <Footer />
        </Router>
    </div>
    )
  }
  
}