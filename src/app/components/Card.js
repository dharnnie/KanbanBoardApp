import React from "react";
import { Checklist } from "./Checklist";

export class Card extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      showDetails: true
    };
  }
  toggleDetails(){
    this.setState({showDetails: !this.state.showDetails});
  }
  render() {
    let cardDetails;
    if(this.state.showDetails){
      cardDetails = (
        <div className="class__details">
          {this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      );
    };
    return(
      <div className="card">
        <div className="card__title" onClick={this.toggleDetails.bind(this)}

        >{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}
