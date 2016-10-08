import React from 'react';
import { connect } from 'react-redux';
import { getDecks } from '../../../actions/deck_actions';
import DeckItem from './deck_item';

class DeckList extends React.Component {
  componentDidMount () {
    this.props.getDecks(this.props.subjectId)
  }

  componentDidUpdate () {
    this.props.getDecks(this.props.subjectId)
  }

  render () {
    const decksItems =
    return (
      <noscript />
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
