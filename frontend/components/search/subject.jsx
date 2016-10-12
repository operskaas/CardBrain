import React from 'react';
import { connect } from 'react-redux';
import { getSubject } from '../../actions/subject_actions';

class Subject extends React.Component {
  componentDidMount () {
    this.props.getSubject(this.props.params.subjectId);
  }

  render () {
    return (
      <div>
        This is subject land!
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
