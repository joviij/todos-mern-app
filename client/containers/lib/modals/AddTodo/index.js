import AddTodo from '../../../../components/lib/modals/AddTodo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo as onSubmit } from '../../../../actions/Todo';

const mapDispatchToProps = dispatch => bindActionCreators({
	onSubmit
}, dispatch);

export default connect(null, mapDispatchToProps)(AddTodo);
