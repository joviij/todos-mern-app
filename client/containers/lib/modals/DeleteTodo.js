import DeleteTodo from '../../../components/lib/modals/DeleteTodo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo as onDelete } from '../../../actions/Todo';

const mapStateToProps = state => ({
	todo: state.todos.selected
});

const mapDispatchToProps = dispatch => bindActionCreators({
	onDelete
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
