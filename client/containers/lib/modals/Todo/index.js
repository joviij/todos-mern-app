import TodoModal from '../../../../components/lib/modals/Todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo as onDelete } from '../../../../actions/Todo';

const mapStateToProps = state => ({
	todo: state.todos.selected,
	initialValues: {
		todoName: state.todos.selected.todo,
		label: state.todos.selected.label,
		status: state.todos.selected.status
	}
});

const mapDispatchToProps = dispatch => bindActionCreators({
	onDelete
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
