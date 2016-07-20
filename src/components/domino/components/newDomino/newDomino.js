import React, { PropTypes } from 'react';
import NewDominoButton from './newDominoButton';
import NewDominoForm from './NewDominoForm';

const NewDomino = ({
	formVisible, 
	formShow,
	changeValue
	}) => (
	<div>
		<nav>
			<NewDominoButton formShow={ formShow } />
		</nav>
		<NewDominoForm 	visible={ formVisible } changeTop={ changeValue.changeTopValue }
										changeBottom={ changeValue.changeBottomValue }/>
	</div>
);

NewDomino.propTypes = {
	formVisible: PropTypes.bool.isRequired,
	formShow: PropTypes.func.isRequired,
	changeValue: PropTypes.object.isRequired
}

export default NewDomino;