import Modal from '../../../components/lib/modals/Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CLOSE_MODAL } from '../../../actions/modals';

const mapDispatchToProps = dispatch => bindActionCreators({
	onHide: CLOSE_MODAL
}, dispatch);

export default connect(null, mapDispatchToProps)(Modal);
