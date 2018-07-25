import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import request from 'superagent';

class App extends Component {
    handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({
            projects : projects
        });
    }
    deleteProject(id){
        let url = 'http://5b5765d388d93a0014b02606.mockapi.io/services/v1/project/project/';
        url = url.concat(id);
        request
            .delete(url)
            .set('Accept', 'application/json')
            .then(res => {console.log(res.body);
                this.getProjectFromWeb();
            });
    }
    constructor(){
        super();
        this.state = {
            projects: []
        }
        this.handleAddProject = this.handleAddProject.bind(this);
        this.getProjectFromWeb =  this.getProjectFromWeb.bind(this);
    }
    componentWillMount(){

    }

    componentDidMount(){
        this.getProjectFromWeb();
    }

    getProjectFromWeb() {
        request
            .get('http://5b5765d388d93a0014b02606.mockapi.io/services/v1/project/project')
            .then(res => this.setState({projects: res.body}))
            .catch( err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject} onLoadData={this.getProjectFromWeb}/>
                <Projects projects={this.state.projects} onDelete={this.deleteProject.bind(this)}/>
            </div>
        );
    }


}

export default App;
