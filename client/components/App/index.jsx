import React from 'react';
import PropTypes from 'prop-types';
import './app.css';
import TodoList from '../TodoList';
import AddButton from '../../containers/AddButton';
import modals from './modals';

class App extends React.Component {
	get modal() {
		const current = this.props.modal;
		if (current) {
			return modals.get(current);
		}
		return null;
	}

	get next() {
		const { todos, modal } = this.props;
		return todos && todos.size > 0
			? (
				<TodoList 
					todos={todos} 
					modal={modal} 
					onModalClose={this.props.onCloseModal} 
					onSelectTodo={this.selectTodo}
				/>
			) : <h1>Theres no todos</h1>;
	}

	componentDidMount() {
		this.props.onMount();
	}

	render() {
		return (
			<div className="app">
				{ this.next }
				<AddButton />
				{ this.modal }
			</div>
		);
	}
}

App.propTypes = {
	todos: PropTypes.object,
	modal: PropTypes.string,
	onCloseModal: PropTypes.func,
	onMount: PropTypes.func.isRequired
};

export default App;
