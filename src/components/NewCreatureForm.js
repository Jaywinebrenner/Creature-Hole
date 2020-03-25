import React from 'react';
import { v4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";



const NewCreatureForm = (props) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      marginTop: 20,
      marginLeft: 20,
      textAlign: 'center',
      display: 'inline-block'
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
    cardWrapper: {
      textAlign: 'center',
    },
    createCreatureButton: {
      marginTop: '10px',
      padding: '500px'
    }
  });

  function handleNewCreatureFormSubmission(event) {
    event.preventDefault();
props.onNewCreatureCreation({
  name: event.target.name.value,
    hitPoints: event.target.hitPoints.value,
      armorClass: event.target.armorClass.value,
        desc: event.target.desc.value,
        id: v4()
  })
}
  console.log(handleNewCreatureFormSubmission);




  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   <div className={classes.cardWrapper}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form onSubmit={handleNewCreatureFormSubmission}>

        <Typography variant="h5" component="h2">
          <TextField
            type='text'
            name='name'
            placeholder='Creature Name'
            />
        </Typography>

          <Typography variant="h5" component="h2">
              <TextField

                name='hitPoints'
                placeholder='Hit Points'
                />
            </Typography>

          <Typography variant="h5" component="h2">
          <TextField
            type='text'
            name='armorClass'
            placeholder='Armor Class' />
          </Typography>

            <Typography variant="h5" component="h2">
            <TextField
              multiline
              type='text'
              name='desc'
              placeholder='Description' />
          </Typography>

          <Button
            className='createCreatureButton'
            variant="contained"
            color="primary"
            type='submit'
            >
              Create Creature
          </Button>
        </form>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div>
  );
}

NewCreatureForm.propTypes = {
  onNewCreatureCreation: PropTypes.func
};

export default NewCreatureForm;
