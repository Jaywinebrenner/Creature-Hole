import React from 'react';
import Creature from './Creature.js'
import PropTypes from "prop-types";






const CreatureList = (props) => {

  const styles = {
    appWrapper: {
      textAlign: 'center',
      backgroundColor: 'white',

    }
  }

  return (
    <React.Fragment style={styles.appWrapper}>

      {props.creatureList.map((creature, index) =>
      <Creature
      name={creature.name}
      hitPoints={creature.hitPoints}
      armorClass={creature.armorClass}
      desc={creature.desc}
      key={index}
      />
    )}

    </React.Fragment>

  )
}

CreatureList.propTypes = {
  creatureList: PropTypes.array
};

export default CreatureList
