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
    <div style={styles.appWrapper}>

      {props.creatureList.map((creature, index) =>
      <Creature
      onCreatureSelection = {props.onCreatureSelection}
      onClickingDelete = {props.onClickingDelete}
      onClickingEdit = {props.onClickingEdit}
      name={creature.name}
      hitPoints={creature.hitPoints}
      armorClass={creature.armorClass}
      desc={creature.desc}
      id={creature.id}
      key={creature.id}
      />
    )}

  </div>

  )
}

CreatureList.propTypes = {
  creatureList: PropTypes.array,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onCreatureSelection: PropTypes.func
};

export default CreatureList
