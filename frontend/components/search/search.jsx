import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { sendSearchQuery, clearSearchResults } from '../../actions/search_actions';
import { hashHistory } from 'react-router';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    // this.props.sendSearchQuery(this.state.query);
  }

  componentDidMount () {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.searchField).focus(), 0);
  }

  componentWillUnmount () {
    this.props.clearSearchResults();
  }

  handleSearchFieldChange (e) {
    this.setState({query: e.currentTarget.value});
    this.props.sendSearchQuery(e.currentTarget.value);
  }

  handleResultClick(idx, e) {
    e.preventDefault();
    const subjectId = this.props.results[idx].id
    hashHistory.push(`/subject/${subjectId}`)
  }

  render () {
    const resultsList = this.props.results.map((result, idx) => {
      return (
        <li key={idx} className='search-result-item' onClick={this.handleResultClick.bind(this, idx)}>
          {result.title}
        </li>
      );
    });
    return (
      <div className='search-cont'>
        <div className='search'>
          <h1>What would you like to learn today?</h1>
          <div className='search-bar'>
            <strong>
              <i className="fa fa-search"></i>
            </strong>
            <form onSubmit={this.handleSearchSubmit} className='search-form group'>
              <input type='text'
                placeholder='(e.g. MCAT, Norwegian, React)'
                ref='searchField'
                onChange={this.handleSearchFieldChange}>
              </input>
            </form>
            <ul className='search-result-list'>
              {resultsList}
            </ul>
          </div>
          <h3>Search over a dozen subjects...</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  sendSearchQuery: (query) => dispatch(sendSearchQuery(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
