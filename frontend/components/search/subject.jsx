import React from 'react';
import { connect } from 'react-redux';
import { getSubject } from '../../actions/subject_actions';

class Subject extends React.Component {
  componentDidMount () {
    this.props.getSubject(this.props.params.subjectId);
  }

  render () {
    const subject = this.props.subject;

    const deckItems = subject.decks.map((deck, idx) => {
      return (
        <tr key={idx} className='deck-table-body-row'>
          <td>{idx}</td>
          <td>{deck.title}</td>
          <td>{deck.numCards}</td>
        </tr>
      );
    });

    return (
      <div>
        <header className='subject-header group'>
          <div>
            <div className='subject-info'>
              <h1>
                {subject.title}
              </h1>
              <h4>Authored by {subject.author}</h4>
            </div>
            <div className='get-started'>
              <button>Get Started</button>
              <p>The subject will be automatically added to your library</p>
            </div>
          </div>
        </header>
        <main className='subject-deck-list'>
          <h4>Deck List</h4>
          <table className='subject-deck-table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Deck Name</th>
                <th>Num. of Cards</th>
              </tr>
            </thead>
            <tbody>
              {deckItems}
            </tbody>
          </table>
        </main>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  subject: state.subject
});

const mapDispatchToProps = dispatch => ({
  getSubject: (subjectId) => dispatch(getSubject(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject);
