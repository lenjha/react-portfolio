import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Works(props){
  return(
    <div className='works'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

Works.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Works;
