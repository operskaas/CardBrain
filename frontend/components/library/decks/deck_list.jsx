import React from 'react';
import { connect } from 'react-redux';
import { getDecks } from '../../../actions/deck_actions';

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
    const deckItems = Object.keys(this.props.decks).map((deckId) => {
      const deck = this.props.decks[deckId];
      return (
        <li key={deckId} className='deck-item group'>
          <div className='percentage'>
            {deck.mastery}%
          </div>
          <div className='deck-title'>
            <h5>{deck.title}</h5>
            <span>Cards: {deck.numCards}</span>
          </div>
          <button className='deck-menu-btn'>
            <i className="fa fa-cog"/>
          </button>
          <button className='study-btn'>
            <span><i className="fa fa-play-circle-o" aria-hidden="true"/></span>Study
          </button>
        </li>
      )
    });
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
