import React from 'react';
import { connect } from 'react-redux';
import { getDecks } from '../../../actions/deck_actions';

class DeckList extends React.Component {
  componentDidMount () {
    debugger;
    this.props.getDecks(this.props.subjectId)
  }

  render () {
    return (
      <noscript />
    )
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getDecks: (subjectId) => dispatch(getDecks(subjectId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
