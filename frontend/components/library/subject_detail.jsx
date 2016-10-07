import React from 'react'
import { connect } from 'react-redux';

class SubjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subjectMenuOpen: false };
    this.toggleSubjectMenuOpen = this.toggleSubjectMenuOpen.bind(this);
  }

  componentDidMount() {

  }

  toggleSubjectMenuOpen () {
    if (this.state.subjectMenuOpen) {
      this.setState({subjectMenuOpen: false});
    } else {
      this.setState({subjectMenuOpen:true});
    }
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
              <button>
                <span className='menu-icon'>
                  <i className="fa fa-pencil" ></i>
                </span>
                Edit Subject
              </button>
              <button>
                <span className='menu-icon'>
                  <i className="fa fa-trash-o" ></i>
                </span>
                Delete Subject
              </button>
            </article>
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
