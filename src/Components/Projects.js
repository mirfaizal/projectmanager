import React, { Component } from 'react';
import ProjectItem from "./ProjectItem";
import uuid from 'uuid';

class Projects extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

  render() {
      let projectItems;
      if(this.props.projects){
        projectItems = this.props.projects.map(project => {
                return <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>
            }
        );
      }
      return (
        <div className="Projets">
          <h3>Latest Project</h3>
            <br/>
          {projectItems}
        </div>
      );
  }
}

export default Projects;
