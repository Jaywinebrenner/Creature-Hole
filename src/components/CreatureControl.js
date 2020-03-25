import React from 'react';
import NewCreatureForm from './NewCreatureForm';
import CreatureList from './CreatureList';
import Button from '@material-ui/core/Button';
import CreatureEdit from './CreatureEdit';

const styles = {
  textAlign: 'center',
  paddingTop: '20px',

}

class CreatureControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCreature: null,
      editFormVisible: false,
      formVisibleOnPage: false,
      masterCreatureList: [
        {
          id: 1,
          name: "Goblin Bro",
          hitPoints: 5,
          armorClass: 8,
          desc: "Gnarly little Goblin Bro who licks deodorant and door knobs."
        },
        {
        id: 2,
        name: "Sneezoid",
        hitPoints: 35,
        armorClass: 5,
        desc: "A little booger dude that crusies around and sneezes on surfaces."
        },
        {
        id: 3,
        name: "Draculette",
        hitPoints: 87,
        armorClass: -2,
        desc: "A vampire girl that licks necks, bathes in germs and doesn't brush her teeth."
        },

        {
        id: 4,
        name: "Orc Dude",
        hitPoints: 5,
        armorClass: 9,
        desc: "A pig dude that licks door bells and doesn't social distance."
        },
        ]
    };
  }


  handleToggleEditView = (id) => {
    const newMasterCreatureList = this.state.masterCreatureList.filter(creature => creature.id !== id);
    this.setState(prevState => ({
      editFormVisible: !prevState.editFormVisible
    }));
  }


  handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    handleDeletingCreature = (id) => {
      const newMasterCreatureList = this.state.masterCreatureList.filter(creature => creature.id !== id);
      this.setState({masterCreatureList: newMasterCreatureList});
      this.setState({selectedCreature: null});
    }

    // Need to figure out how to update... delete and make new creature at the same time???
  handleEditingCreature = (id) => {
    const newMasterCreatureList = this.state.masterCreatureList.filter(creature => creature.id !== id);
    this.setState({masterCreatureList: newMasterCreatureList});
    const newNewMasterCreatureList = this.state.masterCreatureList.concat(id);
    this.setState({masterCreatureList: newNewMasterCreatureList});
    this.setState({formVisibleOnPage: false});
  }


  handleAddingNewCreatureToList = (newCreature) => {
    const newMasterCreatureList = this.state.masterCreatureList.concat(newCreature);
    this.setState({masterCreatureList: newMasterCreatureList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedCreature = (id) => {
    const selectedCreature = this.state.masterCreatureList.filter(creature => creature.id === id)[0];
    this.setState({selectedCreature: selectedCreature});
  }

    render(){
        let currentlyVisibleEditState = null;
        let currentlyVisibleState = null;
        let buttonText = null;


        if (this.state.editFormVisible) {
          currentlyVisibleEditState = <CreatureEdit
            onEditingCreature={this.handleEditingCreature}
            creatureList = {this.state.masterCreatureList}
            />;
        }

        if (this.state.formVisibleOnPage) {
          currentlyVisibleState = <NewCreatureForm
          onNewCreatureCreation={this.handleAddingNewCreatureToList}

            />;
          buttonText = "Return to Creature List";
        } else {
          currentlyVisibleState = <CreatureList
            creatureList = {this.state.masterCreatureList}
            onCreatureSelection={this.handleChangingSelectedCreature}
            onClickingDelete = {this.handleDeletingCreature}
            onClickingEdit= {this.handleToggleEditView}


            />;
          buttonText = "Add Creature";
        }
        return (
          <React.Fragment>
            <div
            className='buttonDiv'
            style={styles}
            >
              <Button
              onClick={this.handleClick}
              variant="contained"
              color="primary"
              >
              {buttonText}
              </Button> { /* new code */ }
            </div>
            {currentlyVisibleState}
            {currentlyVisibleEditState}
          </React.Fragment>
        );
      }

}


export default CreatureControl;
