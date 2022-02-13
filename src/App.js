import React, {Component} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './components/home/homeheader.js';
import LuxePage from './components/navbar-pages/luxe.js';
import WonderPage from './components/navbar-pages/wonder.js';
import PrimePage from './components/navbar-pages/prime.js';
import Pricing from './components/pricing/pricing.js';
import Footer from './components/footer.js';



export default class App extends Component {
  render(){
    return (   
        <HashRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/luxe" component={LuxePage}/>
            <Route path="/wonder" component={WonderPage}/>
            <Route path="/prime" component={PrimePage}/>
            <Route path="/pricing" component={Pricing} />
          </Switch>
            
          
          <Footer />
        </HashRouter> 
    )
  }
  
}