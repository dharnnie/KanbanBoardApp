import React, {Component} from 'react';
import {render} from 'react-dom';

export class Search extends Component { // Another way of minifying text in React - ref to import on line 1
  constructor(){
    super();
    this.state = {
      searchTerm: "Dopeness"
    };
  }
  handleChange(event){
    this.setState({searchTerm:event.target.value});
  }
  render(){
    return(
      <div className= "checklist--add-task">
        Search Term: <input type="search" value={this.state.searchTerm} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
