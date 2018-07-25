import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
      return (
        <li className="ProjectItems">
            <strong>{this.props.project.title}</strong> :  {this.props.project.category}
            <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>Delete</a>
        </li>
      );
    }

    deleteProject(id) {
        //console.log(id);
        this.props.onDelete(id);
    }
}

export default ProjectItem;
