import React from 'react';
import PropTypes from 'prop-types';
import './app.css';
import TodoList from '../TodoList';
import AddButton from '../../containers/AddButton';
import { Todo } from '../lib/modals';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: null,
			error: null,
			loading: false,
			selected: null
		};
    
		this.config = {
			api: 'http://localhost:5000'
		};
    
		this.getAllTodos = this.getAllTodos.bind(this);
		this.selectTodo = this.selectTodo.bind(this);
	}

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

	getAllTodos() {
		fetch(`${this.config.api}/api/todos`)
			.then(res => res.json())
			.then(json => this.setState({ todos: json }))
			.catch(error => this.setState({ error }));
	}
  
	selectTodo(todo) {
		this.setState({
			selected: todo
		});
	}
  
	componentDidMount() {
		this.getAllTodos();
	}

	render() {
		const { todos } = this.state;
		const { modal } = this.props;
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
	modal: PropTypes.string,
	onCloseModal: PropTypes.func
};

export default App;
