import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class Stats extends React.Component {

  handleDoneClick () {
    hashHistory.push('/library');
  }

  render () {

    return (
      <aside className='stats'>
        <header>
          Studying: <span>{this.props.cardsAndDeck.deck.title}</span>
        </header>
        <button className='blue-button' onClick={this.handleDoneClick}>
          <i className="fa fa-angle-left" />
          Done
        </button>
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
