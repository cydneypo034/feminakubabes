import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar.js';
import Home from './components/homeheader.js';
import Footer from './components/footer.js';



export default class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <Router>

          <Switch>
            <Route exact path="/" component={Home}></Route>
          
          </Switch>

      <Footer />

    </Router>
    </div>
    )
  }
  
}