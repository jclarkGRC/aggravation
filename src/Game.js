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
        onClick={this.playerOneStart}
      >
      </div>
      )
    })

    this.state = {
      spaces: allSpaces,
      playerOneRoll: 6,
      previousBall: null,
      currentBall: null,
      currentTarget: null
    }
  }
  
  rollGreenDice = (num) => {
    console.log(`You rolled a super ${num}`)
    this.setState({playerOneRoll: num});
  }

  playerOneStart = (event) => {
    let currentBall = event.target;
    if(this.state.playerOneRoll === 6 || this.state.playerOneRoll === 1){
      if(this.state.previousBall !== null){
      this.state.previousBall.classList.remove('highlightBall');
      }
      currentBall.classList.add('highlightBall');
      this.setState({previousBall: currentBall});
    }
  }

  removeHighlight(event){
    let currentBall = event.target;
    currentBall.classList.remove('highlightBall');
  }

  render(){

    return (
      <div className="Table">
        <div id="greenDice">
          <Dice 
            id="greenDice"
            color="green"
            rollDoneCallback={this.rollGreenDice}
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
            <div id="playerOneBallOne" className="playerOneBall" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallTwo" className="playerOneBall" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallThree"className="playerOneBall" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallFour" className="playerOneBall" onClick={this.playerOneStart} ></div>
          </div>
          <div id="playerTwoStart">
            <div id="playerTwoBallOne" className="playerTwoBall"></div>
            <div id="playerTwoBallTwo" className="playerTwoBall"></div>
            <div id="playerTwoBallThree"className="playerTwoBall"></div>
            <div id="playerTwoBallFour" className="playerTwoBall"></div>
          </div>
          <div id="playerThreeStart">
            <div id="playerThreeBallOne" className="playerThreeBall"></div>
            <div id="playerThreeBallTwo" className="playerThreeBall"></div>
            <div id="playerThreeBallThree"className="playerThreeBall"></div>
            <div id="playerThreeBallFour" className="playerThreeBall"></div>
          </div>
          <div id="playerFourStart">
            <div id="playerFourBallOne" className="playerFourBall"></div>
            <div id="playerFourBallTwo" className="playerFourBall"></div>
            <div id="playerFourBallThree"className="playerFourBall"></div>
            <div id="playerFourBallFour" className="playerFourBall"></div>
          </div>
          {/* starting spaces end */}
          <div id="middlePostion" onClick={this.playerOneStart}></div>
          {/* spaces begin */}
          {this.state.spaces}
          {/* spaces end */}
        </div>
      </div>
    );
  }
}

export default Game;
