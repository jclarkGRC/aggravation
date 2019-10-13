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
        onClick={this.moveAroundBoard}
      >
      </div>
      )
    })

    this.state = {
      spaces: allSpaces,
      playerOneRoll: null,
      playerOneFirstMove: true,
      playerTwoRoll: null,
      playerThreeRoll: null,
      playerFourRoll: null,
      previousBall: null,
      currentBall: null,
      currentTarget: null,
      count: 0
    }
  }
  
  rollGreenDice = (num) => {
    this.setState({playerOneRoll: num});
  }

  playerOneStart = (event) => {
    let currentBall = event.target;
    if(this.state.playerOneRoll === 6 || this.state.playerOneRoll === 1){
      this.setState({playerOneFirstMove: true});
      if(this.state.count === 0){
        currentBall.classList.add('highlightBall');
        this.setState({previousBall: currentBall});
        this.setState({count: 1});
      }else{
        this.setState({count: 1});
        alert("You cannot move here");
      }
    }
    else if(this.state.count === 1){
      alert("You cannot move here");
    }
    else{
      alert("You must roll a 6 or a 1 to start playing!");
    }
  }

  moveAroundBoard = (event) => {
    let currentBall = event.target;
    if(this.state.count === 0){
      currentBall.classList.add('highlightBall');
      this.setState({playerOneFirstMove: false});
      this.setState({previousBall: currentBall});
      this.setState({count: 1});
    }
    if(this.state.count === 1){
      let confirmation = window.confirm("Would you like to make this move?");
      if(confirmation && this.state.playerOneFirstMove && currentBall.classList.contains('greenHome')){
        this.state.previousBall.classList.remove('playerOneBallStart');
        this.state.previousBall.classList.remove('highlightBall');
        this.state.previousBall.classList.add('greenHome');
        currentBall.classList.add('playerOneBall');
        this.setState({count: 0, playerOneFirstMove: false});
      }
      else if(confirmation && !this.state.playerOneFirstMove){
        this.state.previousBall.classList.remove('playerOneBall');
        this.state.previousBall.classList.remove('highlightBall');
        currentBall.classList.add('playerOneBall');
        this.setState({count: 0});
      }else{
        alert('You cant move here');
      }
    }
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
            <div id="playerOneBallOne" className="playerOneBallStart" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallTwo" className="playerOneBallStart" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallThree"className="playerOneBallStart" onClick={this.playerOneStart} ></div>
            <div id="playerOneBallFour" className="playerOneBallStart" onClick={this.playerOneStart} ></div>
          </div>
          <div id="playerTwoStart">
            <div id="playerTwoBallOne" className="playerTwoBallStart"></div>
            <div id="playerTwoBallTwo" className="playerTwoBallStart"></div>
            <div id="playerTwoBallThree"className="playerTwoBallStart"></div>
            <div id="playerTwoBallFour" className="playerTwoBallStart"></div>
          </div>
          <div id="playerThreeStart">
            <div id="playerThreeBallOne" className="playerThreeBallStart"></div>
            <div id="playerThreeBallTwo" className="playerThreeBallStart"></div>
            <div id="playerThreeBallThree"className="playerThreeBallStart"></div>
            <div id="playerThreeBallFour" className="playerThreeBallStart"></div>
          </div>
          <div id="playerFourStart">
            <div id="playerFourBallOne" className="playerFourBallStart"></div>
            <div id="playerFourBallTwo" className="playerFourBallStart"></div>
            <div id="playerFourBallThree"className="playerFourBallStart"></div>
            <div id="playerFourBallFour" className="playerFourBallStart"></div>
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
