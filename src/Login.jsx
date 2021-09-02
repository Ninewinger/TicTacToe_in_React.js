import React from 'react';


const Login = (props) => {
    return (
        <div className="contlog">
            <h1>Choose a Weapon</h1>
            <div>
                <div className="asd">
                    <input placeholder="Player 1"></input>
                    <br/>
                    <button id="bx" className="player" onClick={props.change}>X</button>
                </div>
                <div>
                    <input placeholder="Player 2"></input>
                    <br/>
                    <button id="bo" className="player" onClick={props.change}>O</button>
                </div>
            </div>
        </div>
    )
}
export default Login