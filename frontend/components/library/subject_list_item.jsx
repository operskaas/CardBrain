import React from 'react';



class SubjectListItem extends React.Component{

  constructor(props) {
    super(props);
    this.handleSubjectClick = this.handleSubjectClick.bind(this);
  }

  handleSubjectClick(e) {
    e.preventDefault();
    if (!this.props.active){
      this.props.setActiveSubjectFollow(parseInt(this.props.subjectId));
    }
  }
  render () {
    const active = this.props.active;
    const subject = this.props.subject;

    let className = 'subject-list-item group'
    if (active) {
      className += ' active'
    }
    let progressStyle = {
      width: `${subject.mastery}%`
    };
    return (
      <li className={className} onClick={this.handleSubjectClick}>
        <span className='md-icon-holder'>
          <i className="fa fa-book deck-icon" ></i>
        </span>
        <strong className='subject-item-title'>
          {subject.title}
        </strong>
        <div className='progress-holder'>
          <div style={progressStyle}className='progress'></div>
        </div>
      </li>
    );
  }
};

export default SubjectListItem;
