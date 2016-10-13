import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { getSubject } from '../../actions/subject_actions';
import { createSubjectFollow } from '../../actions/subject_follow_actions';
import Modal from 'react-modal';
import modalStyles from '../../constants/modalStyles';
import SessionFormContainer from '../session/session_form_container';

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    this.props.getSubject(this.props.params.subjectId);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleGetStartedClick(e) {
    e.preventDefault();
    const currentUser = this.props.currentUser;
    if (currentUser.id) {
      this.props.createSubjectFollow(currentUser.id, this.props.params.subjectId);
    } else {
      this.setState({modalOpen: true});
    }
  }

  handleGotoLibraryClick(e) {
    e.preventDefault();
    hashHistory.push('/library');
  }

  render () {
    const subject = this.props.subject;

    const deckItems = subject.decks.map((deck, idx) => {
      return (
        <tr key={idx} className='deck-table-body-row'>
          <td>{idx + 1}</td>
          <td>{deck.title}</td>
          <td>{deck.numCards}</td>
        </tr>
      );
    });

    let actionRegion;
    if (subject.userIsFollowing) {
      actionRegion = (
        <div className='get-started'>
          <button onClick={this.handleGotoLibraryClick.bind(this)}>Go To Library</button>
          <p>This subject is already in your library</p>
        </div>
      );
    } else {
      actionRegion = (
        <div className='get-started'>
          <button onClick={this.handleGetStartedClick.bind(this)}>Get Started</button>
          <p>This subject will be automatically added to your library</p>
        </div>
      );
    }

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
            {actionRegion}
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
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          <SessionFormContainer closeModal={this.closeModal} formType='signup'/>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  subject: state.subject,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getSubject: (subjectId) => dispatch(getSubject(subjectId)),
  createSubjectFollow: (userId, subjectId) => dispatch(createSubjectFollow(userId, subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subject);
