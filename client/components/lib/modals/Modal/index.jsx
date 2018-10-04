import React from 'react';
import PropTypes from 'prop-types';
import './generic-modal.css';

class Modal extends React.Component {
	render() {
		return (
			<div className="generic-modal">
				<div className="modal-body">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	onHide: PropTypes.func
};

export default Modal;
