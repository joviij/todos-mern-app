import React from 'react';
import PropTypes from 'prop-types';
import './generic-modal.css';

class Modal extends React.Component {
	get actions() {
		return this.props.actions && this.props.actions.map((action, index) => {
			if (action.hide) {
				return null;
			} else {
				return (
					<button
						className={action.type} 
						onClick={action.onClick} 
						key={index}
						type={action.type === 'submit' ? 'submit' : 'button'}
					>
						{action.label}
					</button>
				);
			}
		});
	}

	render() {
		const { onHide } = this.props;
		return (
			<div className="generic-modal">
				<div className="modal-body">
					{ this.props.children }
					<div className="controls">
						{this.actions}
						<button onClick={onHide} className="danger">Close</button>
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
		onClick: PropTypes.func,
		type: PropTypes.string
	})),
	hide: PropTypes.bool
};

export default Modal;
