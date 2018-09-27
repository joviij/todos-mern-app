import Header from '../../../../components/lib/modals/Todo/Preview/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	initialValues: {
		todoName: state.todos.selected.todo
	}
});

export default connect(mapStateToProps)(Header);
