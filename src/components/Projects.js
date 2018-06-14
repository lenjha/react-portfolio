import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectsList from './ProjectsList';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'optimo',
          link: 'http://michaelyoungrealtor.net/#/',
          date: '2018',
          category: 'SCSS, VueJS'
        },
        {
          title: 'animal town',
          link: 'https://github.com/lenjha/animal-town',
          date: '2018',
          category: 'HTML, SCSS, JS'
        },
        {
          title: 'post-apocalyptia',
          link: 'https://lenjha.github.io/welcome-to-post-apocalyptia/',
          date: '2017',
          category: 'HTML, CSS, JS'
        },
        {
          title: 'trackertron',
          link: 'https://lenjha.github.io/trackertron/',
          date: '2017',
          category: 'HTML, CSS, JS'
        }
      ]
    }
  }

  render() {
    return(
      <div className="projects">
        <ProjectsList projects={this.state.projects}/>
      </div>
    );
  }
}

export default Projects;
