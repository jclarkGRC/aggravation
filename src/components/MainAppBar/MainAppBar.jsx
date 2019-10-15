import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Info from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import Book from '@material-ui/icons/Book';
import VideoGameIcon from '@material-ui/icons/VideogameAsset'
import {withRouter, Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "64px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));

function MainAppBar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const moveTo = (url) => {
    props.history.push(url);
  }
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List style={{
            marginLeft: "5px"
          }}>
            {[{text: 'About', icon: <Info/>}, {text: 'Rules', icon: <Book/>}, {text: 'Game', icon: <VideoGameIcon/>}].map((listItem) => {
              const link = listItem.text;

              return (
                <ListItem button key={listItem.text} onClick={() => moveTo(link)}>
                  <ListItemIcon>{listItem.icon}</ListItemIcon>
                  <ListItemText primary={listItem.text}/>
                </ListItem>
              )
            })}
          </List>
        <Divider/>
        <List style={{
          marginLeft: "5px"
        }}>
          {[{text: 'Leaderboard', icon: <ListIcon/>}].map((listItem) => {
            const link = listItem.text;
            return (
              <ListItem button key={listItem.text} onClick={() => moveTo(link)}>
                <ListItemIcon>{listItem.icon}</ListItemIcon>
                <ListItemText primary={listItem.text}/>
              </ListItem>
            )
          })}
        </List>
    </div>
    )

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Aggravation:  A fun marble game for all ages
          </Typography>
          <Button><Link style={{textDecoration: "none", color: "white"}} to="Rules">How To Play</Link></Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default withRouter(MainAppBar);