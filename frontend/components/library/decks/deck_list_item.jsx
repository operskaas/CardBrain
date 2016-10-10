import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { deleteDeck } from '../../../actions/deck_actions';

class DeckListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deckMenuOpen: false
    };
    this.toggleDeckMenuOpen = this.toggleDeckMenuOpen.bind(this);
    this.handleDeleteDeckClick = this.handleDeleteDeckClick.bind(this);
    this.handleEditCardsClick = this.handleEditCardsClick.bind(this);
    this.closeDeckMenu = this.closeDeckMenu.bind(this);
    this.handleClickWhileMenuOpen = this.handleClickWhileMenuOpen.bind(this);
    this.handleStudyBtnClick = this.handleStudyBtnClick.bind(this);
  }

  toggleDeckMenuOpen () {
    if (this.state.deckMenuOpen) {
      this.closeDeckMenu()
    } else {
      this.setState({ deckMenuOpen: true });
      document.addEventListener('click', this.handleClickWhileMenuOpen);
    }
  }

  handleClickWhileMenuOpen(e) {
    this.closeDeckMenu();
  }

  closeDeckMenu() {
    document.removeEventListener('click', this.handleClickWhileMenuOpen);
    this.setState({ deckMenuOpen: false });
  }

  handleDeleteDeckClick() {
    this.closeDeckMenu();
    this.props.deleteDeck(this.props.deck.id);
  }

  handleEditCardsClick () {
    this.closeDeckMenu();
    hashHistory.push(`/edit/${this.props.deck.id}`);
  }

  handleStudyBtnClick() {
    hashHistory.push(`/study/${this.props.deck.id}`)
  }

  render () {
    let menuBtn = <noscript />;
    let studyBtnStyle = {borderRadius: '4px', marginRight: '15px'};
    if (this.props.owner) {
      studyBtnStyle = {};
      menuBtn = (
        <button ref='menu' className='deck-menu-btn' onClick={this.toggleDeckMenuOpen}>
          <i className="fa fa-cog"/>
        </button>
      );
    }
    const deck = this.props.deck;

    let deckMenuStyle = { display: 'none' };
    if (this.state.deckMenuOpen) {
      deckMenuStyle = { display: 'block' };
    }
    return (
      <li className='deck-item group'>
        <div className='percentage'>
          {deck.mastery}%
        </div>
        <div className='deck-title'>
          <h5 onClick={this.handleStudyBtnClick}>{deck.title}</h5>
          <span>Cards: {deck.numCards}</span>
        </div>
        {menuBtn}
        <button className='study-btn' style={studyBtnStyle} onClick={this.handleStudyBtnClick}>
          <span><i className="fa fa-play-circle-o" aria-hidden="true"/></span>Study
        </button>
        <article style={deckMenuStyle} className='subject-menu deck-menu'>
          <button onClick={this.handleEditCardsClick}>
            <span className='menu-list-icon'>
              <i className="fa fa-list" ></i>
            </span>
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
