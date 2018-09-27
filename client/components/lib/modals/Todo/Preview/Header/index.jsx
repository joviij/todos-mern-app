import React from 'react';
import PropTypes from 'prop-types';
import './todo-header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showEdition: false,
			editing: false
		};

		this.toggleEditionPencil = this.toggleEditionPencil.bind(this);
		this.toggleInput = this.toggleInput.bind(this);
	}

	toggleEditionPencil() {
		this.setState({
			showEdition: !this.state.showEdition
		});
	}
  
	toggleInput() {
		this.setState({
			editing: !this.state.editing
		});
	}

	render() {
		const { todo } = this.props;
		return (
			<h3 
				className="todo-header"
				onMouseEnter={this.toggleEditionPencil} 
				onMouseLeave={this.toggleEditionPencil}
			>
				{
					this.state.editing
						? <Field
							type="text"
							name="todoName"
							component="input"
						/>
						: todo.todo
				}
				{ 
					this.state.showEdition || this.state.editing
						? <FontAwesomeIcon icon={faPen} onClick={this.toggleInput} /> 
						: null 
				}
			</h3>
		);
	}
}

Header.propTypes = {
	todo: PropTypes.object.isRequired
};

export default reduxForm({
	form: 'todo-title'
})(Header);
