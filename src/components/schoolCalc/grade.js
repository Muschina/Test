import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Students from './students';

import './grade.less';

export default class Grade extends Component {
  constructor() {
    super();
    this.state = {
      gradeGPA: 0,
      students: [],
      nameEmpty: true,
      GPAempty: true,
      nameError: false,
      GPAerror: false
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.gradeName).focus();
  }

  gradeNameChange(e) {
    this.props.gradeNameChange(e.target.value, this.props.number);
  }

  nameValidate(e) {
    let target = e.target;
    let empty = (target.value.trim().length) ? false : true;
    let reg = new RegExp('^[A-Z][a-zA-Z- _\.]{0,40}$');
    this.setState({nameEmpty: empty}, () => {
    
      if(reg.test(target.value)) {
        this.setState({nameError: false})
        target.className = (empty === false) ? 'success' : '';
      } 
      else {
        this.setState({nameError: true});
        target.className = (empty === false) ? 'error' : '';
      }            
    }); 
  }

  GPAvalidate(e) {
    let target = e.target;
    let empty = (target.value.trim().length) ? false : true;
    
    this.setState({GPAempty: empty}, () => {
      
        if(isNaN(target.value) || target.value < 0 || target.value > 5) {
          this.setState({GPAerror: true});
          target.className = (empty === false) ? 'error' : '';
        } 
        else {
          this.setState({GPAerror: false})
          target.className = (empty === false) ? 'success' : '';
        }            
    }); 
  }

  studentAdd(e) {
    e.preventDefault();
    let name = this.refs.name;
    let GPA = this.refs.GPA;
    this.setState({ students:  this.state.students.concat([{name: name.value, GPA: +GPA.value}]),
                    nameEmpty: true, GPAempty: true}, 
                              this.gradeGPAcalculate);
        
    name.value = GPA.value = null;
    name.className = GPA.className = '';
  }

  studentDelete(e) {
    e.preventDefault();
    let newStudentsArr = this.state.students.slice();
    newStudentsArr.splice(+e.target.value, 1);
    this.setState({students: newStudentsArr}, this.gradeGPAcalculate);
  }

  gradeGPAcalculate() {
    let GPA = this.state.students.length 
                ? (this.state.students.reduce((sum, item) => (sum + item.GPA),0)/
                  this.state.students.length).toFixed(2)
                : 0;
    this.setState({gradeGPA: GPA}, this.props.gradeGPAChange(GPA, this.props.number));
  }

  render() {
    return (
      <div className={'calc-content ' + (this.props.visible === this.props.number ? '' : 'hidden')}>
        <form className='calc-form-name'>
          <label htmlFor='gradeName'>GRADE
            <input ref='gradeName' id='gradeName' onChange={::this.gradeNameChange}/>
          </label>
        </form>
        <span>GRADE GPA - <span className='calc-GPA'>{this.state.gradeGPA}</span></span>
        <form name='students'>
          <table className='calc-table'>
            <tbody>
              <tr>
                <th>NAME</th><th>GPA</th>
              </tr>
               {this.state.students.map((item, i) => (
                <Students key={i} data={item} 
                button={<button value={i} onClick={::this.studentDelete}>x</button>} />
                )
              )}
              <tr>
                <td className='calc-table-input'>
                  <input ref='name' form='students' onChange={::this.nameValidate}/>
                </td>
                <td className='calc-table-input'>
                  <input ref='GPA' form='students' onChange={::this.GPAvalidate}/>
                </td>
                <td><button form='students' disabled={this.state.nameEmpty || 
                      this.state.GPAempty || this.state.nameError || this.state.GPAerror} 
                      onClick={::this.studentAdd}>ADD</button>
                </td>                
              </tr>
            </tbody>
          </table>
        </form>
        <div className={'danger gradient ' + (this.state.nameError ? '' : 'hidden')}>
          Name should contain only Latin characters, underscores, dashes and spaces, 
          and begin with a capital letter.</div>
        <div className={'danger gradient ' + (this.state.GPAerror ? '' : 'hidden')}> 
          GPA should contain value from 0 to 5.
        </div>
      </div>
    )
  }
}