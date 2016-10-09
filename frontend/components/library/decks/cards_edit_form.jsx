import React from 'react';
import { connect } from 'react-redux';
import { getCards } from '../../../actions/card_actions';

class CardsEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: []
    };
    this.addCardInput = this.addCardInput.bind(this);
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
    if (nextProps === this.props) {
      return;
    }
    this.setState({
      inputs: nextProps.cards
    })
  }

  render() {
    const inputList = this.state.inputs.map((input, idx) => {
      return (
      <tr key={idx}>
        <td></td>
        <td>
          <textarea value={input.questionText}/>
        </td>
        <td>
          <textarea value={input.answerText}/>
        </td>
        <td>
          Delete
        </td>
      </tr>);
    });
    const deckTitle = this.props.decks[this.props.params.deckId].title;
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
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>
                <button className='create-deck-btn' onClick={this.addCardInput}>
                  Add Card
                </button>
              </td>
              <td colSpan='2'>
                <button className='study-btn'>
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
  const cards = Object.keys(state.cards).map(cardId => {
    return state.cards[cardId];
  });
  return ({
    decks: state.decks,
    cards
  });
};

const mapDispatchToProps = dispatch => ({
  getCards: (deckId) => dispatch(getCards(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsEditForm);
