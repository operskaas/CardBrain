import React from 'react';
import { hashHistory } from 'react-router';

class Study extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLibraryClick() {
    hashHistory.push('/library');
  }

  render () {
    return (
      <main className='study group'>
        <aside className='thin-nav'>
          <img className='logo'
            onClick={this.handleLibraryClick}
            src={window.cardBrainAssets.logoImage} />
          <span className='icon' onClick={this.handleLibraryClick}>
            <i className="fa fa-book" ></i>
          </span>
          <span className='icon'>
            <i className="fa fa-search" ></i>
          </span>
        </aside>
        <aside className='stats'>


        </aside>
        <article>

        </article>
      </main>
    );
  }
}

export default Study;
