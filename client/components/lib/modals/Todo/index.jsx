import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../containers/lib/modals/Modal';
import Preview from '../../../../components/lib/modals/Todo/Preview';
import './todo-modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import { reduxForm } from 'redux-form';

class Todo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing: false,
			changed: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	get actions() {
		return [
			{ 
				label: <FontAwesomeIcon icon={faTrash} />, 
				onClick: this.onDelete,
				type: 'warning' 
			},
			{
				label: <FontAwesomeIcon icon={faPen} />,
				onClick: this.toggleEditing
			},
			{
				label: <FontAwesomeIcon icon={faSave} />,
				hide: this.state.editing && this.state.changed,
				type: 'submit'
			}
		];
	}

	onDelete() {
		this.props.onDelete(this.props.todo._id);
	}

	handleSubmit(data) {
		const id = this.props.todo._id;
		this.props.onUpdate(id, data);
	}

	toggleEditing() {
		this.setState({
			editing: !this.state.editing
		});
	}

	render() {
		const { props, state } = this;
		return (
			<form onSubmit={props.handleSubmit(this.handleSubmit)}>
				<Modal actions={this.actions}>
					<Preview 
						todo={props.todo} 
						initialValues={props.initialValues} 
						editing={state.editing}
					/>
				</Modal>
			</form>
		);
	}
}

Todo.propTypes = {
	todo: PropTypes.object,
	initialValues: PropTypes.object.isRequired,
	onHide: PropTypes.func,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default reduxForm({
	form: 'todo'
})(Todo);
