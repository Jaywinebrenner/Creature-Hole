import React from 'react';
import NewCreatureForm from './NewCreatureForm';
import CreatureList from './CreatureList';
import Button from '@material-ui/core/Button';


const styles = {
  textAlign: 'center',
  paddingTop: '20px'
}

class CreatureControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      number: 0
    };
  }


  handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }



    render(){

        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
          currentlyVisibleState = <NewCreatureForm />;
          buttonText = "Return to Creature List";
        } else {
          currentlyVisibleState = <CreatureList />;
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
          </React.Fragment>
        );
      }

}


export default CreatureControl;
