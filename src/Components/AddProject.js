import React, { Component } from 'react';
import request from "superagent";

class AddProject extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static defaultProps = {
        categories : ['Web Design' , 'Mobile Development', 'Web Development']
    }

    addProjectToWeb() {
        console.log(this.state.title);
        request
            .post('http://5b5765d388d93a0014b02606.mockapi.io/services/v1/project/project')
            .send(this.state)
            .set('Accept', 'application/json')
            .then(res => {console.log(res.body);
                this.props.onLoadData();
            });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.refs.title.value === ''){
            alert("Title is empty");
        }else{
            console.log(this.refs.title.value);
            let project = {
                title: this.refs.title.value,
                category: this.refs.category.value
            };
            console.log(project);
            this.setState(Object.assign({},project));
            this.addProjectToWeb();
        }

    }

    render() {

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return (
          <div>
              <h3>Add Project</h3>
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <div>
                      <label>Title</label><br/>
                      <input type="text" ref="title"/>
                  </div>
                  <br/>
                  <div>
                      <label>Category</label><br/>
                      <select ref="category" >
                          {categoryOptions}
                      </select>
                  </div>
                  <br/>
                  <input type="submit" value="submit"/>
              </form>
          </div>
        );
  }
}

export default AddProject;
