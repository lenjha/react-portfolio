import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    console.log(this.props)
    return(
      <li className='project'>
        <strong><a href={this.props.project.link} target='_blank'>{this.props.project.title}</a></strong> ({this.props.project.date}) - {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
