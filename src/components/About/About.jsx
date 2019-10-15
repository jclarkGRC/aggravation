import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import boxImage from '../../img/Aggravation-Box.jpg';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    padding: '0 30px',
  },
};

class About extends React.Component {
  
  navigateToGame = () => {
    this.props.history.push('Game');
  }

  render(){
    
    return (
      <div>
        <p>testing</p>
      <Card className='card'>
          <CardMedia
            className='cardMedia'
            image={boxImage}
            title="Aggravation Box"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              What is Aggravation?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Aggravation is a board game for up to four players and later versions for up to six players, whose object is to be the first player to have all four playing pieces (usually represented by marbles) reach the player's home section of the board. The game's name comes from the action of capturing an opponent's piece by landing on its space, which is known as "aggravating".
              <br/><br/>
              Aggravation is one of the many variations of the game Pachisi. It was first produced in 1960 by CO-5 Company. Later versions were made by Minneapolis-based Lakeside Industries, a division of Leisure Dynamic. Today, it is manufactured by Winning Moves, under license from Hasbro.
              <br/><br/>
              Its distinctive features are that the track accommodates from four to six players, unlike other Pachisi-like games which only allow four; that it is normally drilled to accept colored glass marbles as playing pieces; and that it incorporates "shortcuts". There are no "safe" holes where a player's marbles cannot be captured (or "aggravated", in the game's parlance) other than the player's own base and home sections.
              <br/><br/>
              Older versions of the game usually feature an asterisk-shaped board, which is perfectly symmetrical and identical in shape and size from all angles. In addition, older versions allowed up to four players instead of six. However, modern versions of the game produced by Parker Brothers are made in an irregular pattern with a shape that varies for each player, though all players must travel an equal number of spaces in order to reach their respective home sections
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="large" color="primary">
            Learn how to play
          </Button>
          <Button onClick={this.navigateToGame} size="large" color="primary">
            play now!
          </Button>
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(About));