import React from "react";
import ReactDOM from "react-dom";
import { List } from "./List";

export class KanbanBoard extends React.Component {
    render() {
        return (
          <div className = "app" >
              <List id='todo' title= 'To Do' cards={
                this.props.cards.filter((card) => card.status === "todo")
              }/>
              <List id='in-Progress' title= 'In Progress' cards={
                this.props.cards.filter((card) => card.status === "in-progress")
              }/>
              <List id='done' title= 'Done' cards={
                this.props.cards.filter((card) => card.status === "done")
              }/>
            </div>
        );
    }
}

// KanbanBoard.propTypes = {
//   cards: PropTypes.arrayOf(PropTypes.object)
// };
