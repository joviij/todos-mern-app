import App from '../components/App';
import { connect } from 'react-redux';
import { deselectTodo, getAll as onMount } from '../actions/Todo';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	modal: state.modal.modal,
	todos: state.todos.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
	onCloseModal: deselectTodo,
	onMount
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
