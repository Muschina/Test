import React, { Component } from 'react';
import DominoStone from './dominoStone';

import './domino.less';

export default class Domino extends Component {
	constructor() {
		super();
		this.state = {
			formVisibility: false,
			dominoTopIsEmpty: true,
			dominoBottomIsEmpty: true,
			formValidateError: false,
			dominoAnimationTime: 1,
			dominoScale: 1,
			dominoRotate: 0,
			dominoValue: {
				top: 1,
				bottom: 4
			} 
		}
	}

	dominoRotate(value) {
		this.setState({dominoRotate: this.state.dominoRotate + value});
	}

	dominoValueChange(e) {
		e.preventDefault();
		let dominoNewValue = this.refs.newDominoForm.elements;
		this.setState({	dominoTopIsEmpty: true, dominoBottomIsEmpty: true, formVisibility: false,
										dominoValue: {top: +dominoNewValue[0].value, bottom: +dominoNewValue[1].value}});
		dominoNewValue[0].value = dominoNewValue[1].value = null;
		dominoNewValue[0].className = dominoNewValue[1].className = '';
	}

	newDominoValidate(stateName, e) {
		let target = e.target;
		let empty = (target.value.length) ? false : true;
		this.setState({['' + stateName]:empty}, () => {
			if(isNaN(target.value) || target.value < 0 || target.value > 6) {
				this.setState({formValidateError: true});
				if (this.state['' + stateName] === false) {
					target.className = 'error';
				}
			} 
			else {
					this.setState({formValidateError: false})
					target.className = (this.state['' + stateName] === false) ? 'success' : '';
			}
		});	
	}

	rangeChange(stateName, e) {
		e.preventDefault();
		this.setState({['' + stateName]: +e.target.value});
		console.log(this.state['' + stateName]);
	}

	showForm(value, e) {
		e.preventDefault();
		this.setState({formVisibility: value});
	}

	render() {
		
		return (
			<div className='domino-wrapper'>
				<div className='domino-container'>
					<nav className='domino-header-btn'>
						<button id='rotateCouterClockwise' className='domino-arrow'
										onClick={this.dominoRotate.bind(this, -90)}>
							<img className='domino-arrow-left' />
						</button>	 
						<button id='newDomino' onClick={this.showForm.bind(this, true)}>NEW</button>	 
						<button id='rotateClockwise' className='domino-arrow'  
										onClick={this.dominoRotate.bind(this, 90)} >
							<img className='domino-arrow-right' />
						</button>	 
					</nav>

					<form ref='newDominoForm' name='newDominoForm' className={'domino-new-domino ' + (this.state.formVisibility ? '' : 'hidden')}>
						<h3>Enter top and bottom number</h3>
						<label htmlFor='dominoTop'>Top number
							<input id='dominoTop' onChange={this.newDominoValidate.bind(this, 'dominoTopIsEmpty')}/>
						</label>
						
						<label htmlFor='dominoBottom'>Bottom number
							<input id='dominoBottom' onChange={this.newDominoValidate.bind(this, 'dominoBottomIsEmpty')}/>
						</label>
						<div className={'danger ' + (this.state.formValidateError ? '' : 'hidden')}>
							You should enter only numbers from '0' to '6'
						</div>
						<nav>
							<button disabled={this.state.dominoTopIsEmpty || this.state.dominoBottomIsEmpty || this.state.formValidateError} 
											onClick={::this.dominoValueChange}>CREATE</button>
							<button onClick={this.showForm.bind(this, false)}>CANCEL</button>
						</nav>
					</form>	

					
					<DominoStone value={this.state.dominoValue} angle={this.state.dominoRotate} 
									scale={this.state.dominoScale} time={this.state.dominoAnimationTime}/>
					<form name='rangeForm' className='domino-range-form'>
						<label htmlFor='dominoRange'>Size
							<input id='dominoRange' type='range' min='0.5' max='1.5' step='0.1' defaultValue='1'
										onChange={this.rangeChange.bind(this, 'dominoScale')}/>
						</label>
						<label htmlFor='dominoSpeed'>Speed
							<input id='dominoSpeed' type='range' min='0' max='5' step='1' defaultValue='1'
										onChange={this.rangeChange.bind(this, 'dominoAnimationTime')}/>
						</label>
					</form>
				</div>
			</div>
		)
	}
} 