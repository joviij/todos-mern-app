import App from '../components/App';
import { connect } from 'react-redux';
import { deselectTodo } from '../actions/Todo';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	modal: state.modal.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	onCloseModal: deselectTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
