import React from 'react';
import { connect } from 'react-redux';
import { createConfidenceRating, getCards } from '../../actions/card_actions';

class CardStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      currentCard: { questionText: '', answerText: '' }
    };
    this.revealAnswer = this.revealAnswer.bind(this);
    this.rateOne = this.rateOne.bind(this);
  }

  revealAnswer() {
    this.setState({revealed: true})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards.length !== this.props.cards.length) {
      this.makeFirstCardCurrent(nextProps);
    }
  }

  makeFirstCardCurrent(nextProps) {
    this.setState({currentCard: nextProps.cards[0]});
  }

  nextCard(){
    const rand = Math.random();
    if (rand < 0.85) {
      return this._randomCardWithRatingAtLeast(0);
    } else if (rand < 0.90) {
      return this._randomCardWithRatingAtLeast(1);
    } else if (rand < 0.93) {
      return this._randomCardWithRatingAtLeast(2);
    } else if (rand < 0.96) {
      return this._randomCardWithRatingAtLeast(3);
    } else if (rand < 0.98) {
      return this._randomCardWithRatingAtLeast(4);
    } else {
      return this._randomCardWithRatingAtLeast(5);
    }
  }

  _randomCardWithRatingAtleast(rating) {
    for (var i = rating; i <= 5; i++) {
      const card = this._randomCardOfRating(i)
      if (card !== -1) {
        return card;
      }
    }
  }

  _randomCardOfRating(rating) {
    const cardsWithRating = [];
    const cards = this.props.cards;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].rating === rating) {
        cardsWithRating.push(cards[i])
      }
    }
    if (cardsWithRating.length === 0) {
      return -1;
    }
    return cardsWithRating[Math.floor(cardsWithRating.length * Math.random())];
  }

  rateOne() {
    this.setState({revealed: false});
    // this.props.createConfidenceRating(this.state.currentCard.id,1);
  }

  render() {
    const currentCard = this.state.currentCard;
    let buttons;
    let howWellText = ' ';
    let flipContClass = 'flip-container';
    if (this.state.revealed) {
      buttons = (
        <div className='card-btns'>
          <button className='rating-btn one' onClick={this.rateOne}>1<small>Not At All</small></button>
          <button className='rating-btn two'>2</button>
          <button className='rating-btn three'>3</button>
          <button className='rating-btn four'>4</button>
          <button className='rating-btn five'>5<small>Perfectly</small></button>
        </div>
      );
      howWellText = 'How well did you know this?';
      flipContClass += ' flipped';
    } else {
      let className = `reveal-btn`
      buttons = (
        <div className='card-btns'>
          <button className={className} title='Press space on your keyboard' onClick={this.revealAnswer}>Reveal Answer</button>
        </div>
      );
    }


    return (
      <main className='card-study'>
        <h6>4 of 4</h6>
        <div className={flipContClass}>
        	<div className="flipper">
        		<div className="front">
              <div className='card-front group'>
                <div className='side-text'>Q.</div>
                <div className='card-text'>{currentCard.questionText}</div>
                <div className='edit-side'>Edit</div>
              </div>
        		</div>
        		<div className="back">
              <div className='card-front group'>
                <div className='side-text'>A.</div>
                <div className='card-text'>{currentCard.answerText}</div>
                <div className='edit-side'>Edit</div>
              </div>
        		</div>
        	</div>
        </div>
        <div className='study-toolbar'>
          <p>{howWellText}</p>
          {buttons}
        </div>
      </main>
    );
  }

}

const mapStateToProps = state => {
  const cards = Object.keys(state.cards.cards).map(cardId => {
    return state.cards.cards[cardId];
  });
  return ({
    cards
  });
};

const mapDispatchToProps = dispatch => ({
  createConfidenceRating: (cardId, rating) => dispatch(createConfidenceRating(cardId, rating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardStudy);
