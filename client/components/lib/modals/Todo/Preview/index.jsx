import React from 'react';
import PropTypes from 'prop-types';
import './preview-todo.css';
import Label from '../../../../Todo/Label';
import Header from '../../../../../containers/lib/modals/Todo/Header';

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
			return 'a day ago';  
		}
	}

	render() {
		const { todo } = this.props;
		return (
			<React.Fragment>
				<Header todo={todo} />
				<div className="modal-body">
					<ul className="preview-todo">
						<li>
							<span>Status:&nbsp;</span>{statuses[todo.status]}
						</li>
						<li className="date-time">
							<span>Created:&nbsp; {this.formatDate}</span>
							<span className="days">{this.daysDifference}</span>
						</li>
						<li>
							<Label label={todo.label} />
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

Preview.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Preview;
