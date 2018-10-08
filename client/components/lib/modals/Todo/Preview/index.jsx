import React from 'react';
import PropTypes from 'prop-types';
import './preview-todo.css';
import Label from '../../../../Todo/Label';
import Header from './Header';
import { Field } from 'redux-form';

const statuses = {
	'1': 'To Do',
	'2': 'Doing',
	'3': 'Done'
};

class Preview extends React.Component {
	get formatDate() {
		const date = new Date(this.props.todo.created);
		return [date.getDate(), (date.getMonth() + 1), date.getFullYear()].join('/');
	}
  
	get daysDifference() {
		const oneDay = 86400000;
		const created = new Date(this.props.todo.created);
		const days = Math.round(Math.abs((created.getTime() - (new Date().getTime()))/(oneDay)));
		if (days > 1) {
			return `${days} days ago`;
		} else {
			return 'today';  
		}
	}

	get next() {
		const { props } = this;
		if (props.editing) {
			return (
				<ul className="preview-todo">
					<li>
						<span>Status:&nbsp;</span>
						{/* This should be a select input */}
						<Field 
							type="number"
							component="input"
							name="status"
						/>
					</li>
					<li>
						<Label label={props.todo.label} editing />
					</li>
					<li className="date-time">
						<span>Created:&nbsp; {this.formatDate}</span>
						<span className="days">{this.daysDifference}</span>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="preview-todo">
					<li>
						<span>Status:&nbsp;</span>{statuses[props.todo.status]}
					</li>
					<li>
						<Label label={props.todo.label} />
					</li>
					<li className="date-time">
						<span>Created:&nbsp; {this.formatDate}</span>
						<span className="days">{this.daysDifference}</span>
					</li>
				</ul>
			);
		}
	}

	render() {
		const { todo } = this.props;
		return (
			<React.Fragment>
				<Header 
					todo={todo} 
					editing={this.props.editing} 
					onEdit={this.toggleEditing} 
				/>
				<div className="todo-data">
					{ this.next }
				</div>
			</React.Fragment>
		);
	}
}

Preview.propTypes = {
	todo: PropTypes.object.isRequired,
	editing: PropTypes.bool.isRequired
};

export default Preview;
