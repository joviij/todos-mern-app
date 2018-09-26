import Todo from '../components/Todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTodo } from '../actions/Todo';

const mapDispatchToProps = dispatch => bindActionCreators({
	onSelect: selectTodo
}, dispatch);

export default connect(null, mapDispatchToProps)(Todo);
