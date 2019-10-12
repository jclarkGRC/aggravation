import React from 'react';
import './App.css';
import {spaces} from "./spaces"

function App() {
  
  let allSpaces = spaces.map((space) => {
    return(
    <div 
      key={space.id}
      className={space.class}
      style={{
        position: "absolute",
        marginTop: space.top,
        marginLeft: space.left
      }}
    >
      {space.id}
    </div>
    )
  })

  return (
    <div className="App">
      {/* starting spaces */}
      <div id="playerOneStart">
        <div id="playerOneBallOneStart" className="playerOneBall"></div>
        <div id="playerOneBallTwoStart" className="playerOneBall"></div>
        <div id="playerOneBallThreeStart"className="playerOneBall"></div>
        <div id="playerOneBallFourStart" className="playerOneBall"></div>
      </div>
      <div id="playerTwoStart">
        <div id="playerTwoBallOneStart" className="playerTwoBall"></div>
        <div id="playerTwoBallTwoStart" className="playerTwoBall"></div>
        <div id="playerTwoBallThreeStart"className="playerTwoBall"></div>
        <div id="playerTwoBallFourStart" className="playerTwoBall"></div>
      </div>
      <div id="playerThreeStart">
        <div id="playerThreeBallOneStart" className="playerThreeBall"></div>
        <div id="playerThreeBallTwoStart" className="playerThreeBall"></div>
        <div id="playerThreeBallThreeStart"className="playerThreeBall"></div>
        <div id="playerThreeBallFourStart" className="playerThreeBall"></div>
      </div>
      <div id="playerFourStart">
        <div id="playerFourBallOneStart" className="playerFourBall"></div>
        <div id="playerFourBallTwoStart" className="playerFourBall"></div>
        <div id="playerFourBallThreeStart"className="playerFourBall"></div>
        <div id="playerFourBallFourStart" className="playerFourBall"></div>
      </div>
      {/* starting spaces end */}
      <div id="middlePostion"></div>
      {/* spaces begin */}
      {allSpaces}
      {/* spaces end */}
    </div>
  );
}

export default App;
