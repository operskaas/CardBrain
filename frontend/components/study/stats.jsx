import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import RCProgress from 'rc-progress';

const Circle = RCProgress.Circle;

class Stats extends React.Component {

  handleDoneClick () {
    hashHistory.push('/library');
  }

  render () {
    const percentage = 65;
    return (
      <aside className='stats'>
        <header>
          Studying: <span>{this.props.cardsAndDeck.deck.title}</span>
        </header>
        <button className='blue-button' onClick={this.handleDoneClick}>
          <i className="fa fa-angle-left" />
          Done
        </button>
        <figure className='deck-percent'>
          <h3 className='percent'>{percentage}</h3>
          <h5 className='percent-sign'>%</h5>
          <h5 className='mastery-subtitle'>Mastery</h5>
          <Circle percent={percentage}
            strokeWidth='6'
            strokeColor='#29A5DC'
            trailWidth='6'
            trailColor='#444444'
          />
        </figure>
        <div className = 'mastered-card-count'>
          1 <strong>/</strong> 2
        </div>
        <figure className='confidence-counts'>
          <ul>
            <li>

            </li>
          </ul>
        </figure>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  cardsAndDeck: state.cards
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
