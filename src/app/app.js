import React, { Component } from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom"

import { KanbanBoardContainer } from "./containers/KanbanBoardContainer";

let cardsList = [
     {
         id: 1,
         title: "Kill Bill",
         description: "I should kill Bill with a spoon",
         color: '#BD8D31',
         status: "in-progress",
         tasks: []
     },
     {
         id: 2,
         title: "Get a girlfriend",
         description: "girlfriends can be found [here] (https://github.com/pro-react)",
         color: '#3A7E28',
         status: "todo",
         tasks: [
           {
               id: 1,
               name: "ContactList Example",
               done: true
           },
           {
               id: 2,
               name: "Kanban Example",
               done: false
           },
           {
               id: 3,
               name: "My own experiments",
               done: false
          }
        ]
      },
      {
          id: 2,
          title: "Get a girlfriend",
          description: "girlfriends can be found here (https://github.com/pro-react)",
          status: "done",
          tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
           }
         ]
       }
];

render( <KanbanBoardContainer /> , document.getElementById("root"));
