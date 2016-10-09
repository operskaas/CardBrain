import React from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../../actions/card_actions';

class CardsEditForm extends React.Component {
  componentDidMount () {
    this.props.getCards(this.deck.id);
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getCards: (deckId) => dispatch(getCards(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsEditForm);
