import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


class Modal extends React.Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal-overlay';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  _render() {
    ReactDOM.render(
      <Provider store={this.context.store}>
        <div className='modal'>
          {this.props.children}
        </div>
      </Provider>,
      this.modalTarget
    );
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
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
