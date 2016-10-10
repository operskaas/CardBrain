import React from 'react';
import { connect } from 'react-redux';

class CardStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {revealed: false};
    this.revealAnswer = this.revealAnswer.bind(this);
    this.rateOne = this.rateOne.bind(this);
  }

  revealAnswer() {
    this.setState({revealed: true})
  }

  rateOne() {
    this.setState({revealed: false});
  }


  render() {
    let buttons;
    if (this.state.revealed) {
      buttons = (
        <ul>
          <li>
            <button className='rating-btn one' onClick={this.rateOne}>1 <small>Not At All</small></button>
          </li>
          <li>
            <button className='rating-btn two'>2</button>
          </li>
          <li>
            <button className='rating-btn three'>3</button>
          </li>
          <li>
            <button className='rating-btn four'>4</button>
          </li>
          <li>
            <button className='rating-btn five'>5<small>Perfectly</small></button>
          </li>
        </ul>
      )
    } else {
      buttons = <button onClick={this.revealAnswer}>Reveal Answer</button>
    }
    return (
      <main className='card-study'>
        <h6>4 of 4</h6>
        <div className='card-front'>

        </div>
        {buttons}
      </main>
    );
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardStudy);
