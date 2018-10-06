import Modal from '../../../components/lib/modals/Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal as onHide } from '../../../actions/modals';

const mapDispatchToProps = dispatch => bindActionCreators({
	onHide
}, dispatch);

export default connect(null, mapDispatchToProps)(Modal);
