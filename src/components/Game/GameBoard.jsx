import React from 'react';
import './Game.css';
import {spaces} from '../../spaces'
import Dice from './Dice';


const gameboardWidth = 821
const screenWidth = window.screen.width;
let leftMargin = null;
let scaleRate = screenWidth / gameboardWidth

if(scaleRate > 1) {
  scaleRate = 1;
}


class GameBoard extends React.Component {
  
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
      playerRoll: null,
      playerOneFirstMove: true,
      playerTwoFirstMove: true,
      playerThreeFirstMove: true,
      playerFourFirstMove: true,
      previousBall: null,
      currentBall: null,
      count: 0,
      leftMargin: 0
    }

    this.gameBoard = React.createRef();
  }
  
  rollDice = (num) => {
    this.setState({playerRoll: num});
  }

  rolledASix = () => {
    if(this.state.playerRoll === 6){
      alert("You rolled a 6! You get to roll again!");
    }
  }

  playerStart = (event) => {
    let currentBall = event.target;
    if(this.state.playerRoll === 6 || this.state.playerRoll === 1){
      if(currentBall.classList.contains('playerOneBallStart')){
        this.setState({playerOneFirstMove: true});
      }
      if(currentBall.classList.contains('playerTwoBallStart')){
        this.setState({playerTwoFirstMove: true});
      }
      if(currentBall.classList.contains('playerThreeBallStart')){
        this.setState({playerThreeFirstMove: true});
      }
      if(currentBall.classList.contains('playerFourBallStart')){
        this.setState({playerFourFirstMove: true});
      }
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
    if(this.state.previousBall == null){
      alert('Roll a dice to begin playing');
    }else{
      if(this.state.previousBall.classList.contains('playerOneBallStart')|| this.state.previousBall.classList.contains('playerOneBall') || currentBall.classList.contains('playerOneBall')){
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
            this.rolledASix();
            this.setState({count: 0, playerOneFirstMove: false});
          }
          else if(confirmation && !this.state.playerOneFirstMove){
            this.state.previousBall.classList.remove('playerOneBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerOneBall');
            this.rolledASix();
            this.setState({count: 0});
          }
          else if(!confirmation){
            this.state.previousBall.classList.remove('highlightBall');
            this.setState({count: 0})
          }
          else{
            alert('You cant move here');
          }
        }
      }
      if(this.state.previousBall.classList.contains('playerTwoBallStart')|| this.state.previousBall.classList.contains('playerTwoBall') || currentBall.classList.contains('playerTwoBall')){
        if(this.state.count === 0){
          currentBall.classList.add('highlightBall');
          this.setState({playerTwoFirstMove: false});
          this.setState({previousBall: currentBall});
          this.setState({count: 1});
        }
        if(this.state.count === 1){
          let confirmation = window.confirm("Would you like to make this move?");
          if(confirmation && this.state.playerTwoFirstMove && currentBall.classList.contains('blueHome')){
            this.state.previousBall.classList.remove('playerTwoBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('blueHome');
            currentBall.classList.add('playerTwoBall');
            this.rolledASix();
            this.setState({count: 0, playerTwoFirstMove: false});
          }
          else if(confirmation && !this.state.playerTwoFirstMove){
            this.state.previousBall.classList.remove('playerTwoBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerTwoBall');
            this.rolledASix();
            this.setState({count: 0});
          }else{
            alert('You cant move here');
          }
        }
      }
      if(this.state.previousBall.classList.contains('playerThreeBallStart')|| this.state.previousBall.classList.contains('playerThreeBall') || currentBall.classList.contains('playerThreeBall')){
        if(this.state.count === 0){
          currentBall.classList.add('highlightBall');
          this.setState({playerThreeFirstMove: false});
          this.setState({previousBall: currentBall});
          this.setState({count: 1});
        }
        if(this.state.count === 1){
          let confirmation = window.confirm("Would you like to make this move?");
          if(confirmation && this.state.playerThreeFirstMove && currentBall.classList.contains('redHome')){
            this.state.previousBall.classList.remove('playerThreeBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('redHome');
            currentBall.classList.add('playerThreeBall');
            this.rolledASix();
            this.setState({count: 0, playerOneFirstMove: false});
          }
          else if(confirmation && !this.state.playerThreeFirstMove){
            this.state.previousBall.classList.remove('playerThreeBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerThreeBall');
            this.rolledASix();
            this.setState({count: 0});
          }else{
            alert('You cant move here');
          }
        }
      }
      if(this.state.previousBall.classList.contains('playerFourBallStart')|| this.state.previousBall.classList.contains('playerFourBall') || currentBall.classList.contains('playerFourBall')){
        if(this.state.count === 0){
          currentBall.classList.add('highlightBall');
          this.setState({playerFourFirstMove: false});
          this.setState({previousBall: currentBall});
          this.setState({count: 1});
        }
        if(this.state.count === 1){
          let confirmation = window.confirm("Would you like to make this move?");
          if(confirmation && this.state.playerFourFirstMove && currentBall.classList.contains('yellowHome')){
            this.state.previousBall.classList.remove('playerFourBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('yellowHome');
            currentBall.classList.add('playerFourBall');
            this.rolledASix();
            this.setState({count: 0, playerFourFirstMove: false});
          }
          else if(confirmation && !this.state.playerFourFirstMove){
            this.state.previousBall.classList.remove('playerFourBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerFourBall');
            this.rolledASix();
            this.setState({count: 0});
          }else{
            alert('You cant move here');
          }
        }
      }
    }
  }

  componentDidMount(){
    
    if(scaleRate < 1){
    let transformedWidth = this.gameBoard.current.getBoundingClientRect().width;
    leftMargin = -Math.abs(transformedWidth/2);
    this.setState({leftMargin: leftMargin});
    }else{
      //do nothing
    }
  }
    
  render(){

    return (
        <div ref={this.gameBoard} className="GameBoard" style={{
          transform: `scale(${scaleRate})`,
          marginLeft: leftMargin
        }}>
          {/* starting spaces */}
          <div id="playerOneStart">
            <div id="greenDice">
              <Dice 
                id="greenDice"
                color="green"
                rollDoneCallback={this.rollDice}
              />
            </div>
            <div id="playerOneBallOne" className="playerOneBallStart" onClick={this.playerStart} ></div>
            <div id="playerOneBallTwo" className="playerOneBallStart" onClick={this.playerStart} ></div>
            <div id="playerOneBallThree"className="playerOneBallStart" onClick={this.playerStart} ></div>
            <div id="playerOneBallFour" className="playerOneBallStart" onClick={this.playerStart} ></div>
          </div>
          <div id="playerTwoStart">
            <div id="blueDice">
              <Dice 
                id="blueDice"
                color="blue"
                rollDoneCallback={this.rollDice}
              />
            </div>
            <div id="playerTwoBallOne" className="playerTwoBallStart" onClick={this.playerStart}></div>
            <div id="playerTwoBallTwo" className="playerTwoBallStart" onClick={this.playerStart}></div>
            <div id="playerTwoBallThree"className="playerTwoBallStart" onClick={this.playerStart}></div>
            <div id="playerTwoBallFour" className="playerTwoBallStart" onClick={this.playerStart}></div>
          </div>
          <div id="playerThreeStart">
            <div id="redDice">
              <Dice 
                id="redDice"
                color="red"
                rollDoneCallback={this.rollDice}
              />
            </div>
            <div id="playerThreeBallOne" className="playerThreeBallStart" onClick={this.playerStart}></div>
            <div id="playerThreeBallTwo" className="playerThreeBallStart" onClick={this.playerStart}></div>
            <div id="playerThreeBallThree"className="playerThreeBallStart" onClick={this.playerStart}></div>
            <div id="playerThreeBallFour" className="playerThreeBallStart" onClick={this.playerStart}></div>
          </div>
          <div id="playerFourStart">
            <div id="yellowDice">
              <Dice 
                id="yellowDice"
                color="yellow"
                rollDoneCallback={this.rollDice}
              />
            </div>
            <div id="playerFourBallOne" className="playerFourBallStart" onClick={this.playerStart}></div>
            <div id="playerFourBallTwo" className="playerFourBallStart" onClick={this.playerStart}></div>
            <div id="playerFourBallThree"className="playerFourBallStart" onClick={this.playerStart}></div>
            <div id="playerFourBallFour" className="playerFourBallStart" onClick={this.playerStart}></div>
          </div>
          {/* starting spaces end */}
          <div id="middlePostion" className={'spaces'} onClick={this.moveAroundBoard}></div>
          {/* spaces begin */}
          {this.state.spaces}
          {/* spaces end */}
        </div>
    );
  }
}

export default GameBoard;

