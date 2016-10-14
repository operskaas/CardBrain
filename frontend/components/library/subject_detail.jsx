import React from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import EditSubjectForm from './edit_subject_form';
import Decks from './decks/decks';
import modalStyles from '../../constants/modalStyles';
import { deleteSubject } from '../../actions/subject_follow_actions';

class SubjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectMenuOpen: false,
      subjectEditModalOpen: false
    };
    this.toggleSubjectMenuOpen = this.toggleSubjectMenuOpen.bind(this);
    this.handleEditSubjectClick = this.handleEditSubjectClick.bind(this);
    this.handleDeleteSubjectClick = this.handleDeleteSubjectClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeSubjectMenu = this.closeSubjectMenu.bind(this);
    this.handleClickWhileMenuOpen = this.handleClickWhileMenuOpen.bind(this);
  }

  toggleSubjectMenuOpen () {
    if (this.state.subjectMenuOpen) {
      this.closeSubjectMenu();
    } else {
      this.setState({subjectMenuOpen:true});
      document.addEventListener('click', this.handleClickWhileMenuOpen);
    }
  }

  handleClickWhileMenuOpen (e) {
    this.closeSubjectMenu();
  }

  closeSubjectMenu () {
    document.removeEventListener('click', this.handleClickWhileMenuOpen);
    this.setState({subjectMenuOpen: false});
  }

  closeModal () {
    this.setState({subjectEditModalOpen: false})
  }

  handleEditSubjectClick () {
    this.closeSubjectMenu();
    this.setState({
      subjectEditModalOpen: true
    });
  }

  handleDeleteSubjectClick () {
    this.closeSubjectMenu();
    this.props.deleteSubject(this.props.subjectId);
  }

  render () {
    const subject = this.props.subjectFollows.current[this.props.subjectId];
    if (!subject) {
      return (<p>loading...</p>);
    }
    const progressStyle = {
      width: `${subject.mastery}%`
    };

    let display = 'none';
    if (this.state.subjectMenuOpen) {
      display = 'block';
    }
    const subjectMenuStyle = {
      display
    }

    let editSubjectButton = <noscript />

    if (subject.owner) {
      editSubjectButton = (
        <button onClick={this.handleEditSubjectClick}>
          <span className='menu-icon'>
            <i className="fa fa-pencil" ></i>
          </span>
          Edit Subject
        </button>
      );
    }
    return (
      <div className='subject-detail'>
        <div className='subject-detail-main-col'>
          <header className='subject-detail-header group'>
            <div className='large-icon-holder'>
              <i className="fa fa-book deck-icon" ></i>
            </div>
            <div className='subject-detail-title'>
              <h2>{subject.title}</h2>
              <div className='progress-holder'>
                <div style={progressStyle}className='progress'></div>
              </div>
            </div>
            <button className='menu-button' onClick={this.toggleSubjectMenuOpen}>
              <i className="fa fa-cog" ></i>
            </button>
            <article style={subjectMenuStyle} className='subject-menu'>
              {editSubjectButton}
              <button onClick={this.handleDeleteSubjectClick}>
                <span className='menu-icon'>
                  <i className="fa fa-trash-o" ></i>
                </span>
                Delete Subject
              </button>
            </article>
            <Modal
              isOpen={this.state.subjectEditModalOpen}
              onRequestClose={this.closeModal}
              style={modalStyles}
            >
              <button onClick={this.closeModal} className='modal-close-btn'>X</button>
              <EditSubjectForm title={subject.title} subjectId={this.props.subjectId} closeModal={this.closeModal}/>
            </Modal>
          </header>
          <hr/>
          <Decks subject={subject}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjectFollows: state.subjectFollows,
  subjectId: state.subjectFollows.active,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  deleteSubject: (subjectId) => dispatch(deleteSubject(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
