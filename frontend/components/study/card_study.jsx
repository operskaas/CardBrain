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

    // const rand = Math.random();
    // const rand1Card = this.randomCardOfRating(1);
    // if (rand < 0.35 && rand1Card !== -1) {
    //   return rand1Card;
    // } else if (rand < 0.6) {
    //   const rand2Card = this.randomCardOfRating(2);
    //   if (rand2Card !== -1) {
    //     return rand2Card;
    //   }
    // } else if (rand < 0.8) {
    //   const rand3Card = this.randomCardOfRating(3);
    //   if (rand3Card !== -1) {
    //     return rand3Card;
    //   }
    // } else if (rand < 0.98) {
    //   const rand4Card = this.randomCardOfRating(4);
    //   if (rand4Card !== -1) {
    //     return rand4Card;
    //   }
    // } else {
    //   const rand5Card = this.randomCardOfRating(5);
    //   if (rand5Card !== -1) {
    //     return rand5Card;
    //   }
    // }
  }

  randomCardOfRating(rating) {
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
    let sideText = 'Q.'
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
      sideText = 'A.'
    } else {
      let className = `reveal-btn`
      buttons = (
        <div className='card-btns'>
          <button className={className} title='Press space on your keyboard' onClick={this.revealAnswer}>Reveal Answer</button>
        </div>
      );
    }

    let flipperClass = 'flipper'
    // if (this.state.revealed) {
    //   flipperClass += ''
    // }
    return (
      <main className='card-study'>
        <h6>4 of 4</h6>
        <div className="flip-container">
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
