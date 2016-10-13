import React from 'react';
import { connect } from 'react-redux';
import { getCards, createCards, resetCardSave } from '../../../actions/card_actions';

class CardsEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      errors: [],
      saveNotifShowing: false
    };
    this.addCardInput = this.addCardInput.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleQuestionTextChange = this.handleQuestionTextChange.bind(this);
    this.handleAnswerTextChange = this.handleAnswerTextChange.bind(this);
  }

  addCardInput (e) {
    e.preventDefault();
    this.setState({
      inputs: this.state.inputs.concat({questionText:'', answerText:''})
    });
  }

  componentDidMount () {
    this.props.getCards(this.props.params.deckId);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps === this.props) {
    //   return;
    // }

    this.setState({
      inputs: nextProps.cards.concat({questionText:'', answerText:''})
    })

    // if (nextProps.cardSave == true) {
    //   setTimeout(this.props.resetCardSave, 2000);
    // }

    if (nextProps.cardSave) {
      this.setState({saveNotifShowing: true});
      setTimeout(() => this.setState({saveNotifShowing: false}), 2500);
    }

  }

  handleDeleteClick(idx) {
    return function(e) {
      e.preventDefault();
      const newInputs = this.state.inputs.slice();
      newInputs.splice(idx, 1);
      this.setState({
        inputs: newInputs
      })
    }.bind(this);
  }

  handleSaveClick() {
    let anyEmptyQsHaveNonEmptyAs = false;
    let cards = []
    for (var i = 0; i < this.state.inputs.length; i++) {
      const input = this.state.inputs[i];

      if (input.questionText === '' && input.answerText !== '') {
        anyEmptyQsHaveNonEmptyAs = true;
        break;
      }
      if (input.questionText !== '') {
        cards = cards.concat([input]);
      }
    }

    if (anyEmptyQsHaveNonEmptyAs) {
      this.setState({ errors: ["Did not save -- Can't have answer with no question"]});
      return;
    } else {
      this.setState({ errors: []});
    }

    this.props.createCards(cards, this.props.params.deckId);
  }

  handleQuestionTextChange (idx) {
    return function (e) {
      e.preventDefault();
      const newInput = this.state.inputs.slice();
      newInput[idx].questionText = e.currentTarget.value;
      this.setState({ input: newInput});
    }.bind(this);
  }

  handleAnswerTextChange (idx) {
    return function (e) {
      e.preventDefault();
      const newInput = this.state.inputs.slice();
      newInput[idx].answerText = e.currentTarget.value;
      this.setState({ input: newInput});
    }.bind(this);
  }

  render() {
    const inputList = this.state.inputs.map((input, idx) => {
      return (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>
          <textarea value={input.questionText} onChange={this.handleQuestionTextChange(idx)}/>
        </td>
        <td>
          <textarea value={input.answerText} onChange={this.handleAnswerTextChange(idx)}/>
        </td>
        <td>
          <a className='card-delete' href='#' onClick={this.handleDeleteClick(idx)}>
            <i className="fa fa-times"></i>
          </a>
        </td>
      </tr>);
    });
    const deckTitle = this.props.deck.title;

    const errors = this.state.errors.map((error, idx) => {
      return (
        <li key={idx}>
          {error}
        </li>
      );
    });

    let notifications = <noscript />
    if (this.state.saveNotifShowing) {
      notifications = <li className='success-notif'>Cards saved!</li>
    }

    return (
      <div className='cards-edit'>
        <header>
          <h3>Flashcards in {deckTitle}</h3>
        </header>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th colSpan='2'>Answer</th>
            </tr>
          </thead>
          <tbody>
            {inputList}
            <tr>
              <td></td>
              <td colSpan='3'>To add a card, press the button below</td>
            </tr>
            <tr>
              <td colSpan='4'>
                <ul className='errors-list'>
                  {errors}
                  {notifications}
                </ul>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <button className='create-deck-btn' onClick={this.addCardInput}>
                  <strong>
                    <i className="fa fa-plus-circle"></i>
                  </strong>
                  Add Card
                </button>
              </td>
              <td colSpan='2'>
                <button className='study-btn' onClick={this.handleSaveClick}>
                  Save this Deck
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const cards = Object.keys(state.cards.cards).map(cardId => {
    return state.cards.cards[cardId];
  });

  return ({
    deck: state.cards.deck,
    cards,
    cardSave: state.cards.cardSave
  });
};

const mapDispatchToProps = dispatch => ({
  getCards: (deckId) => dispatch(getCards(deckId)),
  createCards: (cards, deckId) => dispatch(createCards(cards, deckId))
});
// resetCardSave: () => dispatch(resetCardSave())

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsEditForm);
