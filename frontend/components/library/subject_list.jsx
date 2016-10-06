import React from 'react';
import SubjectListItem from './subject_list_item.jsx';
import { connect } from 'react-redux';
import {
  getCurrentUserSubjectFollows,
  setActiveSubjectFollow
} from '../../actions/subject_follow_actions';

class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSubjectFollows();
  }

  render () {
    const subjectFollows = this.props.subjectFollows;
    const activeSubject = this.props.active;
    const handleSubjectClick = this.handleSubjectClick;
    const setActiveSubjectFollow = this.props.setActiveSubjectFollow;
    const subjectFollowItems = Object.keys(subjectFollows).map(
      (subjectId, idx) => {
        const active = (parseInt(subjectId) === activeSubject);
        return (
          <SubjectListItem
            subject={subjectFollows[subjectId]}
            subjectId={subjectId}
            active={active}
            key={subjectId}
            setActiveSubjectFollow={setActiveSubjectFollow}/>
        );
      }
    );
    return (
      <ul>
        {subjectFollowItems}
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getSubjectFollows: () => dispatch(getCurrentUserSubjectFollows()),
  setActiveSubjectFollow: (subjectId) => dispatch(setActiveSubjectFollow(subjectId))
});

const mapStateToProps = state => ({
  subjectFollows: state.subjectFollows.current,
  active: state.subjectFollows.active
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectList);
