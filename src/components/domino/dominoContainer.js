import Domino from './domino';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		topValue: state.domino.topValue,
		bottomValue: state.domino.bottomValue
	}
} 

export default connect(mapStateToProps)(Domino);
