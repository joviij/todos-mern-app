import React from 'react';
import './app.css';
import TodoList from '../TodoList';
import AddButton from '../AddButton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: null,
			error: null,
			loading: false,
			modal: 'add-new'
		};
    
		this.config = {
			api: 'http://localhost:5000'
		};
    
		this.getAllTodos = this.getAllTodos.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	getAllTodos() {
		fetch(`${this.config.api}/api/todos`)
			.then(res => res.json())
			.then(json => this.setState({ todos: json }))
			.catch(error => this.setState({ error }));
	}
  
	closeModal() {
		console.log('Close Modal');
		this.setState({
			modal: undefined
		});
	}
  
	componentDidMount() {
		this.getAllTodos();
	}

	render() {
		const { todos, modal } = this.state;
		return (
			<div className="app">
				<TodoList 
					todos={todos} 
					modal={modal} 
					onModalClose={this.closeModal} 
				/>
				<AddButton />
			</div>
		);
	}
}

export default App;
