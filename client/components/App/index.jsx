import React from 'react';
import PropTypes from 'prop-types';
import './app.css';
import TodoList from '../TodoList';
import AddButton from '../../containers/AddButton';
import { Todo } from '../../containers/lib/modals/Todo';

class App extends React.Component {
	get modal() {
		const current = this.props.modal;
		const modals = new Map([
			['todo', <Todo key="todo"/>]
		]);
		if (current) {
			return modals.get(current);
		}
		return null;
	}

	componentDidMount() {
		this.props.onMount();
	}

	render() {
		const { modal, todos } = this.props;
		return (
			<div className="app">
				<TodoList 
					todos={todos} 
					modal={modal} 
					onModalClose={this.props.onCloseModal} 
					onSelectTodo={this.selectTodo}
				/>
				<AddButton />
				{ this.modal }
			</div>
		);
	}
}

App.propTypes = {
	todos: PropTypes.array,
	modal: PropTypes.string,
	onCloseModal: PropTypes.func,
	onMount: PropTypes.func.isRequired
};

export default App;
