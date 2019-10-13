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
      playerOneRoll: null,
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
      if(this.state.previousBall !== null && this.state.count > 1){
        this.state.previousBall.classList.remove('highlightBall');
      }
      if(this.state.count === 0){
        currentBall.classList.add('highlightBall');
        this.setState({previousBall: currentBall});
        this.setState({count: 1});
      }
      if(this.state.count === 1){
        if(!currentBall.classList.contains('playerOneBallStart') && currentBall.classList.contains('greenHome')){
          let confirmation = window.confirm("Would you like to make this move?");
          if(confirmation){
            this.state.previousBall.classList.remove('playerOneBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('greenHome');
            currentBall.classList.add('playerOneBall');
          }else{
            // start over
            this.setState({count: 0});
            this.state.previousBall.classList.remove('highlightBall');
          }
        }else{
          this.setState({count: 1});
          alert("You cannot move here");
        }
      }
    }
    else{
      alert("You must roll a 6 or a 1 to start playing!");
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
