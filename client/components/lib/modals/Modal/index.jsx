import React from 'react';
import PropTypes from 'prop-types';
import './generic-modal.css';

class Modal extends React.Component {
	get actions() {
		return this.props.actions && this.props.actions.map((action, index) => (
			<button onClick={action.onClick} key={index}>{action.label}</button>
		));
	}

	render() {
		const { onHide } = this.props;
		return (
			<div className="generic-modal">
				<div className="modal-body">
					{ this.props.children }
					<div className="controls">
						{this.actions}
						<button onClick={onHide}>Close</button>
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.element.isRequired,
	onHide: PropTypes.func,
	actions: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.any,
		onClick: PropTypes.func
	}))
};

export default Modal;
