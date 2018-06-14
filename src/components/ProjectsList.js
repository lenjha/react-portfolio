import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class ProjectsList extends Component {
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }
    console.log(this.props)
    return(
      <div>
        {projectItems}
      </div>
    );
  }
}

// var masterWorksList = [
//   {
//     title: "1",
//     description: "1 desc"
//   },
//   {
//     title: "2",
//     description: "2 desc"
//   },
//   {
//     title: "3",
//     description: "3 desc"
//   }
// ];
//
// function WorksList(){
//   return (
//     <div>
//       <p>this is workslist</p>
//         <div className='work'>
//           {masterWorksList.map((work, index) =>
//             <Work
//                 title={work.title}
//                 description={work.description}
//                 key={index}
//             />
//           )}
//       </div>
//     </div>
//   );
// }

export default ProjectsList;
