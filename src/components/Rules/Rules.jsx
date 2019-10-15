import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import boardImage from '../../img/Aggravation_Board.jpg';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import './Rules.css'
import Grid from '@material-ui/core/Grid';

class Rules extends React.Component {
  
  navigateToGame = () => {
    this.props.history.push('Game');
  }

  render(){
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}> 
          <Card className="card">
            <CardMedia
              className="card-media"
              image={boardImage}
              title="Aggravation Box"
            />
            <CardContent>
              <Typography style={{textAlign: "center"}} className="title" gutterBottom variant="h5" component="h2">
                How to Play Aggravation
              </Typography>
              <Typography className="bodyDescription" variant="body1" color="textSecondary" component="p">
                <h3>What Is the Objective of the Game?</h3>
                <p>The first player to advance all of his or her marbles around the board to the "Home" position from the "Base" position wins.</p>
                <h3>Deciding Who Starts:</h3>
                <ul>
                  <li>Option one: A player selects a matching set of colored game marbles and places them in the base row of the same color.</li>
                  <li>Option two: Players each then roll one of the dice. Whoever gets the highest number plays first. Play then proceeds clockwise from the first player.</li>
                </ul> 
                <h3>Basic Movement</h3>
                <p>When it is a player's turn, he or she rolls one of the dice and moves a marble clockwise the number of spaces equal to the number shown on the dice. If a six is rolled, that player gets another turn.</p>  
                <h3>Starting a Marble</h3>
                <p>A marble must be "started" before it can be advanced around the board. To do this, it is moved from the base row to the start hole (see picture below). A player only moves a marble to the start hole when he or she rolls a six or a one—it cannot be advanced until the player's next turn. (Remember: If you roll a six, you get an extra turn!) Each player can only have one marble occupying the start hole at a time.</p>
                <h3>General Play</h3>
                <p>After a marble is started, it can be advanced clockwise along the game path. The number of spaces it travels each turn is equal to the number that player rolls on the dice. Count every hole, whether the hole is empty or already taken by a player's marble.</p>
                <p>Jumping over landing on an opponent's marbles is permitted. For more on landing on an opponent's marble, see the "Getting Aggravated" section. However, jumping over or landing on your own is not. If one of your own marbles prevents you from moving another marble the full count on the dice, then you are prevented from moving the "blocked" marble, and your turn is forfeited.</p>
                <p>After a player has one or more marbles on the game path, when he or she rolls a one or six, the player can either start a new marble or move an already started marble along the way. Be advised, the movement of the marble will be either one or six spaces, whichever is displayed on the dice.</p>
                <p><b>Warning:</b> If one of your marbles is already on the start hole, you are precluded from starting another marble. If you have no other marbles to move or do not have the available spaces open to move, your turn is lost.</p>
                <h3>How Do You Get Aggravated?</h3>
                <p>Landing on an opponent's marble is permitted (landing on your own is not). This is called "getting aggravated."</p>
                <p>If an opposing player turn stops on your marbles exactly, your marble is aggravated and must go back to its base row without delay. The abandoned hole is now occupied by your opponent's marble. This aggravation can occur anywhere on the board except in a player's home or base locations.</p>
                <p>Once a marble is relocated back to its base by aggravation, it can only be moved to the start hole by rolling a one or six on your next turn, as previously mentioned.</p>
                <p><b>Note:</b> When you roll a one or six, if an opposition player happens to be momentarily stopped in your start hole as he or she is traversing the board, you can move a marble from your base to start and thereby aggravate your opponent's marble.</p>
                <h3>Board Move Shortcuts:</h3>
                <ul>
                <li><p><b>Center hole shortcut:</b> This is the best shortcut. Obviously, it is located in the game board center. To take this shortcut, you must roll the exact number needed for your marble to land directly in the center hole (the center hole is considered one space further than a star hole). If you are already in a star hole, you need to roll exactly one. Once you are in the center hole, rolling a one on a subsequent turn is the only way out. When you roll a one, then you can move to any star hole (most likely the star hole closest to your home row).</p></li>
                <li><p><b>Star hole shortcut:</b> For this shortcut to be activated, a marble must land in a star hole with the exact count on the dice. Then on the next roll of the dice, the marble can be advanced clockwise around the star holes. You move the marble the number of holes allowed by the roll on the dice around the star holes and then down the path that takes you to the home area with any remaining count on your dice. (At the player's discretion, he or she can exit from any star hole.)</p></li>
                </ul>
                <p>Shortcuts are optional. They can be very beneficial because they reduce the time it takes to advance around the board. But there are dangers! Your marble can be aggravated in the star or center holes, just like in regular play!</p>
                <h3>The Home Stretch</h3>
                <p>When coming into the home row, you have to land in an open space by the exact number count registered on the dice. Since you cannot jump over your own marbles, your first marble must land in the farthest home position. Since this is the case, as you advance each marble home, the exact count on the dice is imperative. If the dice roll gives excess moves than are required for a marble to land in the open spot, that marble cannot be advanced. Try to move another. If no marbles are available, your turn is over.</p>
                <h3>How Do You Win the Game?</h3>
                <p>The first player to get all marbles to the home row wins!</p>
                <h3>Can You Play With Teams?</h3>
                <p>Yes! You can play in teams of two or three, depending on how many players the board you are using is designed for. When you are playing in teams, each team member must use alternating spots on the board. For example, one team would have to have a member playing the yellow marbles and a member playing the blue marbles, while the other would need a member playing the green marbles and a member playing the red marbles.</p>
                <p>You can pass a teammate's marble, but be careful—you can also aggravate it!</p>
                <p>Play in teams proceeds as usual, except when one player moves all of his or her marbles to the home row. When this happens, the player will continue playing, but each of his or her rolls will move a teammate's marbles. If you are playing in teams of three, the finished player will have to declare which teammate he or she is playing for before each turn. Remember: Rolling a six wins you an extra turn, even if that six moves your last marble into a home row—your extra turn will just be played on behalf of a teammate.</p>
                <p>The first team to get all of their home rows filled wins!</p>
                <p>Thanks, and enjoy a fun game of Aggravation!</p>
              </Typography>
            </CardContent>
            <CardActions>
            <Button onClick={this.navigateToGame} size="large" color="white">
              play now!
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    );
  }
}

export default withRouter(Rules);