import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import SessionFormContainer from './session/session_form_container';
import modalStyles from '../constants/modalStyles';


class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render () {
    return (
      <div className='home'>
        <div className='home-text'>
          <h2>Study Smarter</h2>
          <hr/>
          <h4>Find, create, and share flashcards</h4>
          <button onClick={this.openModal} className='blue-button'>Get Started</button>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          <SessionFormContainer closeModal={this.closeModal} formType='signup'/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
