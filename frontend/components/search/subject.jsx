import React from 'react';
import { connect } from 'react-redux';
import { getSubject } from '../../actions/subject_actions';

class Subject extends React.Component {
  componentDidMount () {
    this.props.getSubject(this.props.params.subjectId);
  }

  render () {
    const subject = this.props.subject;
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
        <main>
          <h4>Deck List</h4>
          <table>
            
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
