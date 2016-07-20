import React, { PropTypes } from 'react';

const NewDominoForm = ({
	visible, 
	changeTop,
	changeBottom
	}) => {

	const topInputChange = (e) => {
		changeTop(+e.target.value);
	};

	const bottomInputChange = (e) => {
		changeBottom(+e.target.value);
	};

	return (
		<form className={visible ? '' : 'hidden'}>
			<label htmlFor='topValue'>Top: 
				<input id='topValue' onChange={topInputChange}/>
			</label>
			<label htmlFor='buttomValue'>Bottom: 
				<input id='buttomValue' onChange={bottomInputChange}/>
			</label>
		</form>
	);
}

NewDominoForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	changeTop: PropTypes.func.isRequired,
	changeBottom: PropTypes.func.isRequired
}

export default NewDominoForm;