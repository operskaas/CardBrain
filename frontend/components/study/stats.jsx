import React from 'react';
import { connect } from 'react-redux';

class Stats extends React.Component {

  render () {

    return (
      <aside className='stats'>
        <header>
          Studying: <span>{this.props.cardsAndDeck.deck.title}</span>
        </header>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  cardsAndDeck: state.cards
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
