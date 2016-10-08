import React from 'react';
import { connect } from 'react-redux';
import { deleteDeck } from '../../../actions/deck_actions';

class DeckListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deckMenuOpen: false};
    this.toggleDeckMenuOpen = this.toggleDeckMenuOpen.bind(this);
    this.handleDeleteDeckClick = this.handleDeleteDeckClick.bind(this);
  }

  toggleDeckMenuOpen () {
    if (this.state.deckMenuOpen) {
      this.setState({deckMenuOpen: false});
    } else {
      this.setState({deckMenuOpen:true});
    }
  }

  handleDeleteDeckClick () {
    this.setState({ deckMenuOpen: false });
    this.props.deleteDeck(this.props.deck.id);
  }

  render () {
    let display = 'none';
    if (this.state.deckMenuOpen) {
      display = 'block';
    }
    const deckMenuStyle = {
      display
    };

    let menuBtn = <noscript />;
    let studyBtnStyle = {borderRadius: '4px', marginRight: '15px'};
    if (this.props.owner) {
      studyBtnStyle = {};
      menuBtn = (
        <button className='deck-menu-btn' onClick={this.toggleDeckMenuOpen}>
          <i className="fa fa-cog"/>
        </button>
      );
    }
    const deck = this.props.deck;
    return (
      <li className='deck-item group'>
        <div className='percentage'>
          {deck.mastery}%
        </div>
        <div className='deck-title'>
          <h5>{deck.title}</h5>
          <span>Cards: {deck.numCards}</span>
        </div>
        {menuBtn}
        <button className='study-btn' style={studyBtnStyle}>
          <span><i className="fa fa-play-circle-o" aria-hidden="true"/></span>Study
        </button>
        <article style={deckMenuStyle} className='subject-menu'>
          <button>
            Edit Cards
          </button>
          <button onClick={this.handleDeleteDeckClick}>
            <span className='menu-icon'>
              <i className="fa fa-trash-o" ></i>
            </span>
            Delete Deck
          </button>
        </article>
      </li>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListItem);
