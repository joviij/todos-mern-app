import React from 'react';
import PropTypes from 'prop-types';

const statuses = {
	'1': 'To Do',
	'2': 'Doing',
	'3': 'Done'
};

class Preview extends React.Component {
	render() {
		const { todo } = this.props;
		return (
			<ul>
				<li>{todo.todo}</li>
				<li>{todo.label}</li>
				<li>{statuses[todo.status]}</li>
				<li>{new Date(todo.created).toDateString()}</li>
			</ul>
		);
	}
}

Preview.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Preview;
