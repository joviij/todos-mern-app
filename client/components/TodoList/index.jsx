import React from 'react';
import PropTypes from 'prop-types';
import Modable from 'react-modable';
import './todo-list.css';
import Todo from '../../containers/Todo';
import TodoModal from '../lib/modals/Todo';

const modals = new Map([
  ['todo', TodoModal]
]);

@Modable(modals)
class TodoList extends React.Component {
	get todos() {
		const { todos } = this.props;
		return todos ? todos.map(todo => (
      <Todo 
        key={todo._id} 
        todo={todo} 
        onSelectTodo={this.props.onSelectTodo} 
      />
		)) : <p>Theres no todos!</p>;
	}
  
	render() {
		return (
      <React.Fragment>
			  <ul className="todo-list">
				  { this.todos }
			  </ul>
        { this.modal() }
      </React.Fragment>
		);
	}
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onSelectTodo: PropTypes.func.isRequired
};

export default TodoList;
