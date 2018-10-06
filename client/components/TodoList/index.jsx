import React from 'react';
import PropTypes from 'prop-types';
import './todo-list.css';
import Todo from '../../containers/Todo';

class TodoList extends React.Component {
	get todos() {
		const { todos } = this.props;
		console.log(todos);
		return todos ? todos.map(todo => (
			<Todo 
				key={todo._id} 
				todo={todo} 
				onSelectTodo={this.props.onSelectTodo} 
			/>
		)).toArray() : <h1>Theres no todos!</h1>;
	}
  
	render() {
		return (
			<React.Fragment>
				<ul className="todo-list">
					{ this.todos }
				</ul>
			</React.Fragment>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.array,
	onSelectTodo: PropTypes.func.isRequired
};

export default TodoList;
