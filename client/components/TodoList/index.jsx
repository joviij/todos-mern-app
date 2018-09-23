import React from 'react';
import './todo-list.css';
import Todo from '../Todo';

const todo = {
	todo: 'Lorem Ipsum', 
	label: 'code', 
	status: 1, 
	created: new Date(), 
	id: 'random-id'
};

class TodoList extends React.Component {
	render() {
		return (
			<ul className="todo-list">
				<Todo todo={todo} />
			</ul>
		);
	}
}

export default TodoList;
