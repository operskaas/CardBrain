import React from 'react';
import { connect } from 'react-redux';
import { getDecks } from '../../../actions/deck_actions';
import DeckListItem from './deck_list_item';

class DeckList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getDecks(this.props.subjectId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.subjectId !== nextProps.subjectId) {
      this.props.getDecks(nextProps.subjectId);
    }
  }

  render () {
    const deckIds = Object.keys(this.props.decks);
    let deckItems = <noscript />;
    if (deckIds.length === 0) {
      if (this.props.owner) {
        deckItems = (
          <li className='no-decks'>
            <h4>This subject has no Decks!</h4>
            <p>
              You can create as many Decks as you want in this Subject.
              All users who are sharing this Subject with you will be able
              to see the decks you add here
            </p>
            <button className='large-create-deck-btn'
              onClick={this.props.openModal}>
              Create Deck
            </button>
          </li>
        );
      } else {
        deckItems = (
          <li className='no-decks'>
            <h4>This subject has no Decks!</h4>
          </li>
        );
      }
    } else {
      deckItems = deckIds.map((deckId) => {
        const deck = this.props.decks[deckId];
        return (
          <DeckListItem deck={deck} key={deckId} owner={this.props.owner}/>
        );
      });
    }

    return (
      <ul>
        {deckItems}
      </ul>
    )
  }
}


const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  getDecks: (subjectId) => dispatch(getDecks(subjectId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
