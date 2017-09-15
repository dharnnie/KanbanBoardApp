import React from "react";
import { Checklist } from "./Checklist";
import {Search} from "./Search";

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

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top:0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };
    return(
      <div className="card">
        <div style={sideColor}/>
        <div className={this.state.showDetails? "card__title card__title--is-open" : "card__title"}onClick={this.toggleDetails.bind(this)}

        >{this.props.title}</div>
        {cardDetails}
        <Search/>
      </div>
    );
  }
}

// Card.propTypes = {
//   title: PropTypes.string,
//   cards: PropTypes.arrayOf(PropTypes.object)
// }
