import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';
import Error404 from './Error404';

class Main extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/works' component={Works}/>
        <Route exact path='/about' component={About}/>
        <Route component={Error404}/>
      </Switch>
    );
  }
}

export default Main;
