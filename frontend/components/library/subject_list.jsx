import React from 'react';
import SubjectListItem from './subject_list_item.jsx';
import { connect } from 'react-redux';
import { getCurrentUserSubjectFollows } from '../../actions/subject_follow_actions';

class SubjectList extends React.Component {
  componentDidMount() {
    this.props.getSubjectFollows();
  }

  render () {
    const subjectFollowItems = this.props.subjectFollows.map(
      (subject, idx) => <SubjectListItem subject={subject} selected={false} key={idx} />
    );
    return (
      <ul>
        {subjectFollowItems}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getSubjectFollows: () => dispatch(getCurrentUserSubjectFollows())
});

const mapStateToProps = state => ({
  subjectFollows: state.subjectFollows
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectList);
