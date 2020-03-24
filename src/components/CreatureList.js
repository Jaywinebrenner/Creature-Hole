import React from 'react';
import Creature from './Creature.js'
import PropTypes from "prop-types";

const masterCreatureList = [
{
  name: "Goblin Bro",
  hitPoints: "5",
  armorClass: '8',
  desc: "Gnarly little Goblin Bro who licks deodorant and door knobs."
},
{
name: "Banshee Gal",
hitPoints: "35",
armorClass: '8',
desc: "A gal that crusies around and sneezes 0n railings."
},
{
name: "Draculette",
hitPoints: "85",
armorClass: '-2',
desc: "A vampire girl that licks necks and doesn't brush her teeth."
},

];
const CreatureList = (props) => {

console.log(props);
  const styles = {
    appWrapper: {
      textAlign: 'center',
      backgroundColor: 'white',
    }
  }



  return (
    <React.Fragment style={styles.appWrapper}>

      {masterCreatureList.map((creature, index) =>
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



export default CreatureList
