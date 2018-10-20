import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import './ui-message.css';

class UIMessage extends React.Component {
	get actions() {
		return [
			{
				label: 'Yes, I,\'m sure'	
			}
		];
	}
	
	render() {
		const { props } = this;
		return (
			<Modal actions={this.actions}>
				<h3 className="todo-header">{props.title}</h3>
				<p className="delete-todo">{props.message}</p>
			</Modal>
		);
	}
}

UIMessage.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object)
};

export default UIMessage;
