import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import RCProgress from 'rc-progress';

const Circle = RCProgress.Circle;

class Stats extends React.Component {

  constructor(props) {
    super(props);
    this.masteryPercent = this.masteryPercent.bind(this);
  }

  handleDoneClick () {
    hashHistory.push('/library');
  }

  masteryPercent() {
    let sumRating = 0;
    this.props.cards.forEach(card => sumRating += card.rating)
    return Math.floor((sumRating / (this.props.cards.length * 5)) * 100);
  }

  ratingPercent(rating) {
    const numCards = this.props.cards.length;
    const numCardsWithRating = this.numCardsWithRating(rating);
    return Math.floor((numCardsWithRating / numCards) * 100);
  }

  numCardsWithRating(rating) {
    return this.props.cards.filter(card => card.rating === rating).length;
  }

  render () {
    let percentage = this.masteryPercent();
    if (percentage !== percentage) { // checks for NaN
      percentage = 0;
    }

    let percentDisplay = <p className='percent'>{percentage}</p>;
    if (percentage === 100) {
      const percentStyle = {left: '134px'};
      const hundredStyle = {letterSpacing: '-12px'};
      percentDisplay = (
        <p className='percent' style={percentStyle}>
          <span style={hundredStyle}>1</span>00
        </p>
      );
    }

    const barOneStyle = { width: `${this.ratingPercent(1)}%`};
    const barTwoStyle = { width: `${this.ratingPercent(2)}%`};
    const barThreeStyle = { width: `${this.ratingPercent(3)}%`};
    const barFourStyle = { width: `${this.ratingPercent(4)}%`};
    const barFiveStyle = { width: `${this.ratingPercent(5)}%`};

    return (
      <aside className='stats'>
        <header>
          Studying: <span>{this.props.deck.title}</span>
        </header>
        <button className='blue-button' onClick={this.handleDoneClick}>
          <i className="fa fa-angle-left" />
          Done
        </button>
        <figure className='deck-percent'>
          {percentDisplay}
          <p className='percent-sign'>%</p>
          <p className='mastery-subtitle'>Mastery</p>
          <Circle percent={percentage}
            strokeWidth='6'
            strokeColor='#29A5DC'
            trailWidth='6'
            trailColor='#444444'
          />
        </figure>
        <div className = 'mastered-card-count group'>
          <p>{this.numCardsWithRating(5)}</p> <small>Cards<br/>Mastered</small><strong>/</strong> <p>{this.props.cards.length}</p> <small>Total<br/>Cards</small>
        </div>
        <figure className='confidence-counts'>
          <ul>
            <li className='group'>
              <small className='confidence-progress-caption'>{this.numCardsWithRating(1)}</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress one'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>{this.numCardsWithRating(2)}</small>
              <div className='confidence-progress-holder'>
                <div style={barTwoStyle}className='confidence-progress two'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>{this.numCardsWithRating(3)}</small>
              <div className='confidence-progress-holder'>
                <div style={barThreeStyle}className='confidence-progress three'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>{this.numCardsWithRating(4)}</small>
              <div className='confidence-progress-holder'>
                <div style={barFourStyle}className='confidence-progress four'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>{this.numCardsWithRating(5)}</small>
              <div className='confidence-progress-holder'>
                <div style={barFiveStyle}className='confidence-progress five'></div>
              </div>
            </li>
          </ul>
        </figure>
      </aside>
    );
  }
}

const mapStateToProps = state => {
  const cards = Object.keys(state.cards.cards).map(cardId => {
    return state.cards.cards[cardId];
  });
  return ({
    cards,
    deck: state.cards.deck
  });
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
