import React from 'react';



class SubjectListItem extends React.Component{

  constructor(props) {
    super(props);
    this.handleSubjectClick = this.handleSubjectClick.bind(this);
  }

  handleSubjectClick(e) {
    e.preventDefault();
    this.props.setActiveSubjectFollow(parseInt(this.props.subjectId));
  }
  render () {
    const active = this.props.active;
    const subject = this.props.subject;

    let className = 'subject-list-item group'
    if (active) {
      className += ' active'
    }

    return (
      <li className={className} onClick={this.handleSubjectClick}>
        <strong className='subject-item-title'>
          {subject.title}
        </strong>
      </li>
    );
  }
};

export default SubjectListItem;
