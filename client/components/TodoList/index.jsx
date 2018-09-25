import React from 'react';
import PropTypes from 'prop-types';
import Modable from 'react-modable';
import './todo-list.css';
import Todo from '../Todo';
import AddNew from '../lib/modals/AddNew';

const modals = new Map([
  ['add-new', AddNew]
]);

@Modable(modals)
class TodoList extends React.Component {
	get todos() {
		const { todos } = this.props;
		return todos ? todos.map(todo => (
			<Todo key={todo._id} todo={todo} />
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
	todos: PropTypes.array
};

export default TodoList;
