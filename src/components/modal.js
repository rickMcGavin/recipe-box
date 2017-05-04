import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	componentDidMount() {
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'my-modal';
		document.body.appendChild(this.modalTarget);
		this._render();
	}

	componentWillUpdate() {
		this._render();
	}

	componentWillMount() {
		this.setState({ edit: true });
	}

	componentWillUnmount() {
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget);
	}

	_render() {
		ReactDOM.render(
			<div>{this.props.children}</div>,
			this.modalTarget
		);
	}

	render() {
		return <noscript />
	}
}

export default Modal;