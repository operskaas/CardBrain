import React from 'react';
import Modal from 'react-modal';
import SubjectList from './subject_list';
import NewSubjectForm from './new_subject_form';
import { connect } from 'react-redux';
import { CREATE_SUBJECT, createSubject } from '../../actions/subject_follow_actions';
import modalStyles from '../../constants/modalStyles';

class SubjectFollowsAside extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNewSubjectSubmit = this.handleNewSubjectSubmit.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  handleNewSubjectSubmit (formState) {
    this.props.createSubject(formState);
    this.setState({modalOpen: false});
  }

  render() {
    return (
      <aside className='subject-follows-aside'>
        <header className='subject-follows-header group'>
          <h4>Subjects</h4>
          <button onClick={this.openModal} className='create-subject-follows-btn'>
            <strong>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </strong>
            Create
          </button>
        </header>
        <SubjectList className='subject-follows-list'/>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          <NewSubjectForm handleSubmit={this.handleNewSubjectSubmit}/>
        </Modal>
      </aside>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createSubject: (subject) => dispatch(createSubject(subject))
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectFollowsAside);
