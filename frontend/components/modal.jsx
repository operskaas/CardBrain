import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';


class Modal extends React.Component {
  componentDidMount() {
    this.closeModal = this.closeModal.bind(this);
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal-overlay';
    this.modalTarget.addEventListener('click', (e) => this.handleModalClick(e));
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  closeModal() {
    const routes = this.props.routes.map(route => route.path);
    const routeBeforeModal = routes.slice(0,routes.indexOf('modal')).join("");
    hashHistory.push(routeBeforeModal);
  }

  handleModalClick(e) {
    if (e.target === this.modalTarget) {
      this.closeModal();
    }
  }

  _render() {
    ReactDOM.render(
      <Provider store={this.context.store}>
        <div className='modal'>
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          {this.props.children}
        </div>
      </Provider>,
      this.modalTarget
    );
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
    this.modalTarget.removeEventListener('click', this.handleModalClick);
  }

  componentWillUpdate() {
    this._render();
  }

  render() {
    return <noscript />;
  }
}

Modal.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default Modal;
