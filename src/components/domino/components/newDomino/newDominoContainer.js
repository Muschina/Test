import NewDomino from './newDomino';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as formShow from './formShow.action';
import * as changeValue from './dominoChangeValue.action';

function mapStateToProps(state) {
	return {
		formVisible: state.dominoForm.formVisible
	}
}

function mapDispatchToProps(dispatch) {
	return {
		formShow: bindActionCreators(formShow.displayForm, dispatch),
		changeValue: bindActionCreators(changeValue, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(NewDomino);