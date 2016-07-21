import React, { PropTypes } from 'react';
import NewDominoButton from './newDominoButton';
import NewDominoForm from './NewDominoForm';

const NewDomino = ({
	formVisible, 
	topIsEmpty,
	bottomIsEmpty,
	formTopError,
	formBottomError,
	formShow,
	changeValue,
	formValidate
	}) => (
	<div>
		<nav>
			<NewDominoButton formShow={ formShow } />
		</nav>
		<NewDominoForm 	
			visible={ formVisible } changeTop={ changeValue.changeTopValue }
			changeBottom={ changeValue.changeBottomValue } topIsEmpty={ topIsEmpty }
			bottomIsEmpty={ bottomIsEmpty } formBottomError={ formBottomError }
			formTopError={ formTopError } changeTopIsEmpty={ formValidate.changeTopIsEmpty }
			changeBottomIsEmpty={ formValidate.changeBottomIsEmpty }
			getTopError={ formValidate.getTopError } formShow={ formShow }
			getBottomError={ formValidate.getBottomError } />
	</div>
);

NewDomino.propTypes = {
	formVisible: PropTypes.bool.isRequired,
	topIsEmpty: PropTypes.bool.isRequired,
	bottomIsEmpty: PropTypes.bool.isRequired,
	formTopError: PropTypes.bool.isRequired,
	formBottomError: PropTypes.bool.isRequired,
	formShow: PropTypes.func.isRequired,
	changeValue: PropTypes.object.isRequired,
	formValidate: PropTypes.object.isRequired
}

export default NewDomino;