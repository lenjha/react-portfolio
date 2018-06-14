import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h4>The page {props.location.pathname} does not exist!</h4>
      <p>Would you like to return <Link to="/">home</Link> instead?</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
