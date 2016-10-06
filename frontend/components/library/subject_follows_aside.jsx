import React from 'react';
import Modal from 'react-modal';
import SubjectList from './subject_list';
import NewSubjectForm from './new_subject_form';

const modalStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'none',
    bottom: 'none',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    color: '#555555'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    width: '100vw',
    height: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.6)',
    display: 'block'
  }
}

class SubjectFollowsAside extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
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
          <NewSubjectForm />
        </Modal>
      </aside>
    )
  }
}

export default SubjectFollowsAside;
