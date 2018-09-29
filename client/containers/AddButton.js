import AddButton from '../components/AddButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodoForm } from '../actions/AddButton';

const mapDispatchToProps = dispatch => bindActionCreators({
	onOpenModal: createTodoForm
}, dispatch);

export default connect(null, mapDispatchToProps)(AddButton);
