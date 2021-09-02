import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Login from './Login';
import Game from "./Game"
import "./index.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isEmptyState: true }
      }
    
      changeState = () => {
        this.setState({
          ...this.state,
          isEmptyState: false,
          isAddTripState: true
        })
      }
      render() {
        return (
          <div>
              <h1>Tic Tac Toe in React.js</h1>
              <h2></h2>
            {this.state.isEmptyState && <Login change={this.changeState} />}
      
            {this.state.isAddTripState && <Game />}
          </div>
        )
      }
    }


ReactDOM.render(<Home />, document.getElementById("root"))