import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Edit, Clear } from "@material-ui/icons";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: 20,
    marginLeft: 20,
    display: 'inline-block',
    width: '300px',
    height: '300px',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginTop: 15,
  },
  pos: {
    marginBottom: 12,
  },
  powersText: {
    fontSize: 12,
    marginTop: 5
  },
  clear: {
    display: 'inline-block',
    float: 'right'
  },
  edit: {
    display: 'inline-block',
    float: 'left'
  }

});


const Creature = (props) => {



  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>

        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hit Points: {props.hitPoints}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Armor Class {props.armorClass}:
        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Description:
          <br />
          {props.desc}

          <br />

        </Typography>
      </CardContent>

      <CardActions
        className={classes.edit}>
        <Edit />
      </CardActions>

      <CardActions
        onClick={()=> props.onClickingDelete(props.id)}
        className={classes.clear}>
        <Clear />
      </CardActions>

    </Card>
  );
}

Creature.propTypes = {
  name: PropTypes.string,
  hitPoints: PropTypes.number,
  armorClass: PropTypes.number,
  desc: PropTypes.string,
  id: PropTypes.number,
  onClickingDelete: PropTypes.func

}



export default Creature
