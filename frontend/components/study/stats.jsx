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

    const barOneStyle = { width: `40%`};
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
            <li className='group'>
              <small className='confidence-progress-caption'>2</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress one'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>2</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress two'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>2</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress three'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>2</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress four'></div>
              </div>
            </li>
            <li className='group'>
              <small className='confidence-progress-caption'>2</small>
              <div className='confidence-progress-holder'>
                <div style={barOneStyle}className='confidence-progress five'></div>
              </div>
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
