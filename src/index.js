import React from 'react';
import ReactDOM from "react-dom";
import Login from './Login';
import Board from "./Board"
import Game from "./Game"
import "./index.css"


let x = true;


const Home = () => {
    if (x === true) {
        return (
            <>
                <h1>Tic Tac Toe in React.js</h1>
                <Game />
            </>
        )
    } else {
        return (
            <>
                <h1>Tic Tac Toe in React.js</h1>
                <Login />
            </>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById("root"))