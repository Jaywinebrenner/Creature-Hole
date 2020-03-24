
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    titleWrapper: {
      textAlign: 'center',
    }
  }),
);


const Header = () => {

const classes = useStyles();

  return (
      <React.Fragment>

        <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Creature Hole
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
            <div className={classes.titleWrapper}>
            <Typography color='textPrimary' variant="h1" className={classes.title}>
              Creature Hole
            </Typography></div>
            <Typography align='center' color='Primary' variant="h5" className={classes.title}>
              Aggregate for Creatures
            </Typography>

      </React.Fragment>


  )

}

export default Header
