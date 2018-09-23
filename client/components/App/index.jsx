import React from 'react';
import './app.css';
import TodoList from '../TodoList';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<TodoList />
			</div>
		);
	}
}

export default App;
