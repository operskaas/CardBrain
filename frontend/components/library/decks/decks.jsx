import React from 'react';
import DeckList from './deck_list';

class Decks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let deckCreateButton = <noscript />;
    if (this.props.subject.owner) {
      deckCreateButton = (
        <button className='create-deck-btn'>
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
        <DeckList subjectId={this.props.subject.id}/>
      </div>
    )
  }
}

export default Decks;
