import React from 'react';

class Search extends React.Component {

  handleSearchSubmit(e) {
    e.preventDefault();
    debugger
  }

  render () {
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
                placeholder='(e.g. MCAT, Norwegian, React)'>

              </input>
              <button className='search-btn'>Search</button>
            </form>
          </div>
          <h3>Search over a dozen subjects...</h3>
        </div>
      </div>
    );
  }
}

export default Search;
