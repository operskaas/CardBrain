import React from 'react'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import EditSubjectForm from './edit_subject_form';
import modalStyles from '../../constants/modalStyles';

class SubjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectMenuOpen: false,
      subjectEditModalOpen: false
    };
    this.toggleSubjectMenuOpen = this.toggleSubjectMenuOpen.bind(this);
    this.handleEditSubjectClick = this.handleEditSubjectClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    // fetch subject's decks...
  }

  toggleSubjectMenuOpen () {
    if (this.state.subjectMenuOpen) {
      this.setState({subjectMenuOpen: false});
    } else {
      this.setState({subjectMenuOpen:true});
    }
  }

  closeModal () {
    this.setState({subjectEditModalOpen: false})
  }

  handleEditSubjectClick () {
    this.setState({
      subjectMenuOpen: false,
      subjectEditModalOpen: true
    });
  }

  render () {
    this.subject = this.props.subjectFollows.current[this.props.subjectId];
    if (!this.subject) {
      return (<p>loading...</p>);
    }
    const progressStyle = {
      width: `${this.subject.mastery}%`
    };

    let display = 'none';
    if (this.state.subjectMenuOpen) {
      display = 'block';
    }
    const subjectMenuStyle = {
      display
    }

    let editSubjectButton = <noscript />

    if (this.subject.owner) {
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
              <h2>{this.subject.title}</h2>
              <div className='progress-holder'>
                <div style={progressStyle}className='progress'></div>
              </div>
            </div>
            <button className='menu-button' onClick={this.toggleSubjectMenuOpen}>
              <i className="fa fa-cog" ></i>
            </button>
            <article style={subjectMenuStyle} className='subject-menu'>
              {editSubjectButton}
              <button>
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
              <EditSubjectForm title={this.subject.title} subjectId={this.props.subjectId} closeModal={this.closeModal}/>
            </Modal>
          </header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjectFollows: state.subjectFollows,
  subjectId: state.subjectFollows.active
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
