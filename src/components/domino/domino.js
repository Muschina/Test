import React, { PropTypes } from 'react';
import NewDominoContainer from './components/newDomino/newDominoContainer';

const Domino = ({
	topValue,
	bottomValue
}) => (
	<div>
		<nav>
			<NewDominoContainer />
		</nav>
		<div>Top value - { topValue }</div>
		<div>Bottom value - { bottomValue }</div>
	</div>	
);

Domino.propTypes = {
	topValue: PropTypes.number.isRequired,
	bottomValue: PropTypes.number.isRequired
}

export default Domino;