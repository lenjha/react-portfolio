import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
  render(){
    return(
      <div>
        <h1>Header!</h1>
        <Navigation/>
      </div>
    );
  }
}

export default Header