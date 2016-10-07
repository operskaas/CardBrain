import React from 'react';

class Decks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let deckCreateButton = <noscript />;
    if (this.props.owner) {
      deckCreateButton = (
        <button>
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
        <p>Deckslist</p>
      </div>
    )
  }
}

export default Decks;
