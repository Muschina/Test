import React, { Component } from 'react';

export default class Students extends Component {

	constructor() {
		super();
	}

	render() {		
		return (
			<tr>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.GPA}</td>
				<td>{this.props.button}</td>
			</tr>
		)
	}
}
	