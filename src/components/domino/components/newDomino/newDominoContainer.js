import NewDomino from './newDomino';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as formShow from './formShow.action';
import * as changeValue from './dominoChangeValue.action';
import * as formValidate from './formValidate.action';

function mapStateToProps(state) {
	return {
		formVisible: state.dominoForm.formVisible,
		topIsEmpty: state.formValidate.topIsEmpty,
		bottomIsEmpty: state.formValidate.bottomIsEmpty,
		formTopError: state.formValidate.formTopError,
		formBottomError: state.formValidate.formBottomError
	}
}

function mapDispatchToProps(dispatch) {
	return {
		formShow: bindActionCreators(formShow.displayForm, dispatch),
		changeValue: bindActionCreators(changeValue, dispatch),
		formValidate: bindActionCreators(formValidate, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewDomino);