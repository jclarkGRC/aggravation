import React from 'react';
import './Game.css';
import {spaces} from '../../spaces'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const gameboardWidth = 821;
const screenWidth = window.screen.width;
let scaleRate = screenWidth / gameboardWidth;

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
        ballcolor={space.ballcolor}
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
      roundComplete: false,
      playerOneBallsOnBoard: 0,
      playerTwoBallsOnBoard: 0,
      playerThreeBallsOnBoard: 0,
      playerFourBallsOnBoard: 0,
      numberOfRolls: 0,
      greenDice: "visible",
      blueDice: "hidden",
      redDice: "hidden",
      yellowDice: "hidden",
      previousBall: null,
      count: 0,
      leftMargin: null,
      currentPlayer: "green",
      animationDuration: "0s"
    }

    this.gameBoard = React.createRef();
  }
  
  rollDice = (num) => {
    this.setState({playerRoll: num});
    if(this.state.currentPlayer === "green"){
      console.log("you rolled the green dice");
      if(this.state.playerOneBallsOnBoard === 0){
        if((this.state.playerRoll >= 2) && (this.state.playerRoll <= 5)){
          this.setState({
            currentPlayer: "blue",
            greenDice: "hidden",
            blueDice: "visible"
          })
        }
      }
    }
    else if(this.state.currentPlayer === "blue"){
      console.log("you rolled the blue dice");
      if(this.state.playerOneBallsOnBoard === 0){
        if((this.state.playerRoll >= 2) && (this.state.playerRoll <= 5)){
          this.setState({
            currentPlayer: "red",
            blueDice: "hidden",
            redDice: "visible" 
          })
        }
      }
    }
    else if(this.state.currentPlayer === "red"){
      console.log("you rolled the red dice");
      if(this.state.playerOneBallsOnBoard === 0){
        if((this.state.playerRoll >= 2) && (this.state.playerRoll <= 5)){
          this.setState({
            currentPlayer: "yellow",
            redDice: "hidden",
            yellowDice: "visible"
          })
        }
      }
    }
    else if(this.state.currentPlayer === "yellow"){
      console.log("you rolled the yellow dice");
      if(this.state.playerOneBallsOnBoard === 0){
        if((this.state.playerRoll >= 2) && (this.state.playerRoll <= 5)){
          this.setState({
            currentPlayer: "green",
            yellowDice: "hidden",
            greenDice: "visible",
            roundComplete: true
          })
        }
      }
    }
  }

  rolledASix = () => {
    if(this.state.playerRoll === 6){
      return true;
    }
    else{
      return false;
    }
  }

  playerStart = (event) => {
    let currentBall = event.target;
    if(currentBall.getAttribute('ballcolor') !== this.state.currentPlayer){
      alert("It is not your turn!\nIt is " + this.state.currentPlayer + "'s turn.")
    }else{
      // If the player rolls a 1 or a 6 they can choose a starter
      // ball to put into play as long as there isn't one in their 
      // starting space currently.
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
          currentBall.classList.add('highlightBall');
          this.state.previousBall.classList.remove('highlightBall');
          this.setState({previousBall: currentBall});
        }
      }
      else if(this.state.count === 1){
        alert("You cannot move here");
      }
      else{
        alert("You must roll a 6 or a 1 to start playing!");
      }
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
          if(confirmation && this.state.playerOneFirstMove && currentBall.classList.contains('greenHome') && this.state.currentPlayer === "green"){
            this.state.previousBall.classList.remove('playerOneBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('greenHome');
            currentBall.classList.add('playerOneBall');
            //let numberOfBallsOnBoard = this.state.playerOneBallsOnBoard + 1
            this.setState({count: 0, playerOneFirstMove: false});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }
            else{
              this.setState({
                currentPlayer: "blue",
                blueDice: "visible",
                greenDice: "hidden"
              })
            }
          }
          else if(confirmation && !this.state.playerOneFirstMove && this.state.currentPlayer === "green"){
            this.state.previousBall.classList.remove('playerOneBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerOneBall');
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "blue",
                blueDice: "visible",
                greenDice: "hidden"
              })
            }
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
          if(confirmation && this.state.playerTwoFirstMove && currentBall.classList.contains('blueHome') && this.state.currentPlayer === "blue"){
            this.state.previousBall.classList.remove('playerTwoBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('blueHome');
            currentBall.classList.add('playerTwoBall');
            this.setState({count: 0, playerTwoFirstMove: false});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "red",
                redDice: "visible",
                blueDice: "hidden"
              })
            }
          }
          else if(confirmation && !this.state.playerTwoFirstMove && this.state.currentPlayer === "blue"){
            this.state.previousBall.classList.remove('playerTwoBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerTwoBall');
            this.setState({count: 0});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "red",
                redDice: "visible",
                blueDice: "hidden"
              })
            }
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
          if(confirmation && this.state.playerThreeFirstMove && currentBall.classList.contains('redHome') && this.state.currentPlayer === "red"){
            this.state.previousBall.classList.remove('playerThreeBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('redHome');
            currentBall.classList.add('playerThreeBall');
            this.setState({count: 0, playerOneFirstMove: false});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "yellow",
                yellowDice: "visible",
                redDice: "hidden"
              })
            }
          }
          else if(confirmation && !this.state.playerThreeFirstMove && this.state.currentPlayer === "red"){
            this.state.previousBall.classList.remove('playerThreeBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerThreeBall');
            this.setState({count: 0});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "yellow",
                yellowDice: "visible",
                redDice: "hidden"
              })
            }
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
          if(confirmation && this.state.playerFourFirstMove && currentBall.classList.contains('yellowHome') && this.state.currentPlayer === "yellow"){
            this.state.previousBall.classList.remove('playerFourBallStart');
            this.state.previousBall.classList.remove('highlightBall');
            this.state.previousBall.classList.add('yellowHome');
            currentBall.classList.add('playerFourBall');
            this.setState({count: 0, playerFourFirstMove: false});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "green",
                greenDice: "visible",
                yellowDice: "hidden"
              })
            }
          }
          else if(confirmation && !this.state.playerFourFirstMove && this.state.currentPlayer === "yellow"){
            this.state.previousBall.classList.remove('playerFourBall');
            this.state.previousBall.classList.remove('highlightBall');
            currentBall.classList.add('playerFourBall');
            this.setState({count: 0});
            if(this.rolledASix()){
              alert("You rolled a 6! You get to roll again!");
            }else{
              this.setState({
                currentPlayer: "green",
                greenDice: "visible",
                yellowDice: "hidden"
              })
            }
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
    let leftMargin = (gameboardWidth - transformedWidth) / 2
    this.setState({leftMargin: -Math.abs(leftMargin)});
    }else{
      //do nothing
    }
  }

  getCurrentPlayer = (event) => {
    //If the user clicks on the dot we want to see 
    //what the dice color is... not the dot.. so we grab
    //the parent element to determine which dice is rolled
    //and set the current player state to the dice color
    if (event.target.classList.contains('dot')) {
      //this.setState({ currentPlayer: event.target.parentElement.style.background });
      this.checkPlayerTurn(event.target.parentElement.style.background);
    }
    else {
      //this.setState({ currentPlayer: event.target.style.background });
      this.checkPlayerTurn(event.target.style.background);
    }




  };

  checkPlayerTurn = (playerElementBeingClicked) => {
    if(playerElementBeingClicked !== this.state.currentPlayer){
      alert("It is not your turn to play!\nIt is " + this.state.currentPlayer + "'s turn.");
    }
  }
    
  render(){

    console.log(this.state);


    return (
        <div>
        <div id="currentPlayer" style={{margin: "0 auto"}}><h1> The current player is: <span style={{color:this.state.currentPlayer}}>{this.state.currentPlayer}</span></h1></div>
        <div ref={this.gameBoard} className="GameBoard" style={{
          transform: `scale(${scaleRate})`,
          marginLeft: this.state.leftMargin,
          marginTop: "10px"
        }}>
          {/* starting spaces */}
          <div id="playerOneStart">            
              <div 
              id="greenDice"
              style={{
                visibility: this.state.greenDice,
              }}>
              <ReactDice
                id="greenDice"
                numDice={1}
                rollDone={this.rollDice}
                ref={dice => this.greenDice = dice}
                faceColor="green"
              />
              </div>
            <div id="playerOneBallOne" className="playerOneBallStart" ballcolor="green" onClick={this.playerStart} ></div>
            <div id="playerOneBallTwo" className="playerOneBallStart" ballcolor="green" onClick={this.playerStart} ></div>
            <div id="playerOneBallThree"className="playerOneBallStart" ballcolor="green" onClick={this.playerStart} ></div>
            <div id="playerOneBallFour" className="playerOneBallStart" ballcolor="green" onClick={this.playerStart} ></div>
          </div>
          <div id="playerTwoStart">
              <div 
              id="blueDice"
              style={{
                  visibility: this.state.blueDice
              }}>
              <ReactDice
                id="blueDice"
                numDice={1}
                rollDone={this.rollDice}
                ref={dice => this.blueDice = dice}
                faceColor="blue"
              />
              </div>
            <div id="playerTwoBallOne" className="playerTwoBallStart" ballcolor="blue" onClick={this.playerStart}></div>
            <div id="playerTwoBallTwo" className="playerTwoBallStart" ballcolor="blue" onClick={this.playerStart}></div>
            <div id="playerTwoBallThree"className="playerTwoBallStart" ballcolor="blue" onClick={this.playerStart}></div>
            <div id="playerTwoBallFour" className="playerTwoBallStart" ballcolor="blue" onClick={this.playerStart}></div>
          </div>
          <div id="playerThreeStart">
          <div 
              id="redDice"
              style={{
                visibility: this.state.redDice
              }}>
              <ReactDice
                id="redDice"
                numDice={1}
                rollDone={this.rollDice}
                ref={dice => this.redDice = dice}
                faceColor="red"
              />
              </div>
            <div id="playerThreeBallOne" className="playerThreeBallStart" ballcolor="red" onClick={this.playerStart}></div>
            <div id="playerThreeBallTwo" className="playerThreeBallStart" ballcolor="red" onClick={this.playerStart}></div>
            <div id="playerThreeBallThree"className="playerThreeBallStart" ballcolor="red" onClick={this.playerStart}></div>
            <div id="playerThreeBallFour" className="playerThreeBallStart" ballcolor="red" onClick={this.playerStart}></div>
          </div>
          <div id="playerFourStart">
          <div 
              id="yellowDice"
              style={{
                visibility: this.state.yellowDice
              }}>
              <ReactDice
                id="yellowDice"
                numDice={1}
                rollDone={this.rollDice}
                ref={dice => this.yellowDice = dice}
                faceColor="yellow"
              />
            </div>
            <div id="playerFourBallOne" className="playerFourBallStart" ballcolor="yellow" onClick={this.playerStart}></div>
            <div id="playerFourBallTwo" className="playerFourBallStart" ballcolor="yellow" onClick={this.playerStart}></div>
            <div id="playerFourBallThree"className="playerFourBallStart" ballcolor="yellow" onClick={this.playerStart}></div>
            <div id="playerFourBallFour" className="playerFourBallStart" ballcolor="yellow" onClick={this.playerStart}></div>
          </div>
          {/* starting spaces end */}
          <div id="middlePostion" className={'spaces'} onClick={this.moveAroundBoard}></div>
          {/* spaces begin */}
          {this.state.spaces}
          {/* spaces end */}
        </div>
        </div>
    );
  }
}

export default GameBoard;

