import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render(){
    return(
      <div>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/works'>Works</Link></li>
        <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation