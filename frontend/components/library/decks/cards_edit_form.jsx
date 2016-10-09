import React from 'react';

class CardsEditForm extends React.Component {
  componentDidMount () {

  }
  render() {
    return (
      <div className='cards-edit'>
        <header>
          <h3>Flashcards in this Deck</h3>
        </header>
        <form>

          <button className='study-btn'>
            Save this Deck
          </button>
        </form>
      </div>
    );
  }
}

export default CardsEditForm;
