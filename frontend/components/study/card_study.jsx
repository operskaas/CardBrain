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

  componentDidMount() {
    this.props.fetchCards
  }

  render() {
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
    return (
      <main className='card-study'>
        <h6>4 of 4</h6>
        <div className='card-front'>

        </div>
        <div className='study-toolbar'>
          <p>{howWellText}</p>
          {buttons}
        </div>
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
