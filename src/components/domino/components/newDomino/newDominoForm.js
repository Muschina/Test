import React, { PropTypes, Component } from 'react';

export default class NewDominoForm extends Component {

  constructor() {
    super();
  }

  topInputChange(e) {
    let value = e.target.value;
    (value.length) ? this.props.changeTopIsEmpty(false) : this.props.changeTopIsEmpty(true);
    this.valueValidate(+value) ? this.props.getTopError(true) : this.props.getTopError(false);
  }

  bottomInputChange(e) {
    let value = e.target.value;
    (value.length) ? this.props.changeBottomIsEmpty(false) : this.props.changeBottomIsEmpty(true);
    this.valueValidate(+value) ? this.props.getBottomError(true) : this.props.getBottomError(false);
  }

  valueValidate(value) {
    return (isNaN(value) || value < 0 || value > 6);
  }

  changeDominoValue(e) {
    e.preventDefault();
    let dominoNewValue = this.refs.newDominoForm.elements;
    this.props.changeTop(+dominoNewValue[0].value);
    this.props.changeBottom(+dominoNewValue[1].value);
    this.hiddenForm();
    dominoNewValue[0].value = dominoNewValue[1].value = null;
    dominoNewValue[0].className = dominoNewValue[1].className = '';
  }

  hiddenForm() {
    this.props.formShow(false);
  }

  render() {
    let topError = this.props.formTopError;
    let bottomError = this.props.formBottomError;
    let topIsEmpty = this.props.topIsEmpty;
    let bottomIsEmpty = this.props.bottomIsEmpty;

    return (
      <form ref='newDominoForm' className={ this.props.visible ? '' : 'hidden' }>
        <label htmlFor='topValue'>Top: 
          <input className={ topError ? 'error' : (topIsEmpty ? '' : 'success') } 
          id='topValue' onChange={ ::this.topInputChange }/>
        </label>
        <label htmlFor='buttomValue'>Bottom: 
          <input className={ bottomError ? 'error' : (bottomIsEmpty ? '' : 'success') }
          id='buttomValue' onChange={ ::this.bottomInputChange }/>
        </label>
        <button onClick={ ::this.changeDominoValue } 
                disabled={ topIsEmpty || bottomIsEmpty || topError || bottomError }>
                CREATE
        </button> 
        <button onClick={ ::this.hiddenForm }>CANCEL</button>
      </form>
    );
  }
}

NewDominoForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  topIsEmpty: PropTypes.bool.isRequired,
  bottomIsEmpty: PropTypes.bool.isRequired,
  formTopError: PropTypes.bool.isRequired,
  formBottomError: PropTypes.bool.isRequired,
  changeTop: PropTypes.func.isRequired,
  changeBottom: PropTypes.func.isRequired,
  changeTopIsEmpty: PropTypes.func.isRequired,
  changeBottomIsEmpty: PropTypes.func.isRequired,
  getTopError: PropTypes.func.isRequired, 
  getBottomError: PropTypes.func.isRequired, 
  formShow: PropTypes.func.isRequired 
}
