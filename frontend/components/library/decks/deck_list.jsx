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
    const deckItems = Object.keys(this.props.decks).map((deckId) => {
      const deck = this.props.decks[deckId];
      return (
        <DeckListItem deck={deck} key={deckId} owner={this.props.owner}/>
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
