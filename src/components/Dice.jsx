import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
 
export default class Dice extends React.Component {
 
  render() {
    return (
      <div>
        <ReactDice
          id={this.props.id}
          numDice={1}
          rollDone={this.props.rollDoneCallback}
          ref={dice => this.reactDice = dice}
          faceColor={this.props.color}
        />
      </div>
    )
  }
 
  rollAll() {
    this.reactDice.rollAll()
  }
 
}