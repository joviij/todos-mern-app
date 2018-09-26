import Preview from '../../../../components/lib/modals/Todo/Preview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	todo: state.todos.selected
});

export default connect(mapStateToProps)(Preview);
