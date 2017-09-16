import React, {Component} from "react";
import KanbanBoard from '../components/KanbanBoard';
import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application-json',
  'Authorisation': 'bebadass'
};

export class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    };
  }
  componentDidMount(){
    fetch(API_URL+'/cards', {headers: API_HEADERS})
    .then((response)=> response.json())
    .then((responseData)=>{
      this.setState({cards:responseData});
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render(){
    return <KanbanBoard cards={this.state.cards} />
  }
}
