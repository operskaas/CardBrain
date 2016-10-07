import React from 'react'
import { connect } from 'react-redux';

class SubjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render () {
    this.subject = this.props.subjectFollows.current[this.props.subjectId];
    if (!this.subject) {
      return (<p>loading...</p>);
    }
    const progressStyle = {
      width: `${this.subject.mastery}%`
    };
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
            <button className='menu-button'>
              <i className="fa fa-cog" ></i>
            </button>
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
