import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
 
export default class Dice extends React.Component {
 
  render() {
    return (
      <div>
        <ReactDice
          numDice={1}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
          faceColor={this.props.color}
        />
      </div>
    )
  }
 
  rollAll() {
    this.reactDice.rollAll()
  }
 
  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)
  }
}