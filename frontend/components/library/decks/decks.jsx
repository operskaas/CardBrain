import React from 'react';

class Decks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let deckCreateButton = <noscript />;
    if (this.props.owner) {
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
        <ul>
          {deckList}
        </ul>
      </div>
    )
  }
}

export default Decks;
