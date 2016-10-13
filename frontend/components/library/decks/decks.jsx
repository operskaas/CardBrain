import React from 'react';
import DeckList from './deck_list';
import Modal from 'react-modal';
import modalStyles from '../../../constants/modalStyles';
import NewDeckForm from './new_deck_form';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {createDeckModalOpen: false};
  }

  openModal() {
    this.setState({createDeckModalOpen: true});
  }

  closeModal() {
    this.setState({createDeckModalOpen: false});
  }

  render() {
    let deckCreateButton = <noscript />;
    if (this.props.subject.owner) {
      deckCreateButton = (
        <button className='create-deck-btn' onClick={this.openModal}>
          <strong>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </strong>
          Create Deck
        </button>
      );
    }
    return (
      <div className='decks'>
        <header className='group'>
          <h4>Decks</h4>
          {deckCreateButton}
        </header>
        <DeckList openModal={this.openModal} subjectId={this.props.subject.id} owner={this.props.subject.owner}/>
        <Modal
          isOpen={this.state.createDeckModalOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          <NewDeckForm closeModal={this.closeModal} subjectId={this.props.subject.id}/>
        </Modal>
      </div>
    )
  }
}

export default Decks;
