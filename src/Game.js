import React from 'react';
import './Game.css';
import {spaces} from './spaces'
import Dice from './components/Dice';

class Game extends React.Component {
  
  constructor(props){
    super(props);

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
      </div>
      )
    })

    this.state = {
      spaces: allSpaces
    }
  }
  
  

  rollDoneCallback(num) {
    console.log(this.id)
    console.log(`You rolled a super ${num}`)
  }

  render(){

    console.log(this.state);

    return (
      <div className="Table">
        <div id="greenDice">
          <Dice 
            id="greenDice"
            color="green"
            rollDoneCallback={this.rollDoneCallback}
          />
        </div>
        <div id="redDice">
          <Dice 
            id="redDice"
            color="red"
            rollDoneCallback={this.rollDoneCallback}
          />
        </div>
        <div id="blueDice">
          <Dice 
            id="blueDice"
            color="blue"
            rollDoneCallback={this.rollDoneCallback}
          />
        </div>
        <div id="yellowDice">
          <Dice 
            id="yellowDice"
            color="yellow"
            rollDoneCallback={this.rollDoneCallback}
          />
        </div>
        <div className="GameBoard">
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
          {this.state.spaces}
          {/* spaces end */}
        </div>
      </div>
    );
  }
}

export default Game;
