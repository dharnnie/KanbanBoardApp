import React from "react";
import { Checklist } from "./Checklist";

export class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <div className="card__title">{this.props.title}</div>
        <div className="class__details">
          {this.props.description}
          <Checklist cardId={this.props.id} tasks={this.props.tasks}/>
        </div>
      </div>
    );
  }
}
