import React, { PropTypes } from 'react';

const NewDominoButton = ({formShow}) => {
	const displayForm = () => (
		formShow(true)
	);

	return <button onClick={ displayForm }>NEW</button>
}

NewDominoButton.propTypes = {
	formShow: PropTypes.func.isRequired
}

export default NewDominoButton;
