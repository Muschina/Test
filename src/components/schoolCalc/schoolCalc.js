import React, { Component } from 'react';
import Grade from './grade';

import './schoolCalc.less';

export default class SchoolCalc extends Component {

  constructor() {
    super();
    this.state = {
      GPA: 0,
      grades: [{
        gradeGPA: 0, 
        gradeName: 'GRADE '
      }],
      visible: 0
    }
  }

  GPA_Change(value) {
    this.setState({GPA: value});
  }

  deleteGrade(e) {
    e.preventDefault();
    let lastGrade = this.state.grades.length - 1;
    let newGradeArr = this.state.grades.slice();
    newGradeArr.splice(+e.target.value, 1);
    this.setState({
      grades: newGradeArr,
      visible: lastGrade - 1
    }, this.generalGPAcalculate);
  }

  addGrade(e){
    e.preventDefault();
    let lastGrade = this.state.grades.length - 1;
    let newGrade = this.state.grades.concat([{gradeGPA: 0,  gradeName: 'GRADE '}]);
    console.log(newGrade);
    this.setState({
      grades: this.state.grades.concat([{gradeGPA: 0,  gradeName: 'GRADE '}]),
      visible: lastGrade + 1
    }, this.generalGPAcalculate)
  }

  gradeVisibility(e) {
    this.setState({visible: +e.target.value});
  }

  gradeNameChange(value, number) {
    let newGradeArr = this.state.grades.map((item, i) => {
      let newGradeItem = item;
      if(i === number) {
        newGradeItem.gradeName = 'GRADE ' + value
      }
      return newGradeItem; 
    });
    this.setState({grades: newGradeArr});
  }

  gradeGPAChange(value, number) {
    let newGradeArr = this.state.grades.map((item, i) => {
      let newGradeItem = item;
      if(i === number) {
        newGradeItem.gradeGPA = +value
      }
      return newGradeItem; 
    })

    this.setState({grades: newGradeArr}, this.generalGPAcalculate);
  }

  generalGPAcalculate() {
    let gradesGPAnumber = this.state.grades.length;
    let GPAsum = (this.state.grades.reduce((sum, item) => {
      if(!item.gradeGPA) gradesGPAnumber--;
      return sum + item.gradeGPA
      },0));
    console.log(GPAsum);
    this.setState({GPA: GPAsum ? (GPAsum/gradesGPAnumber).toFixed(2) : 0});
  }

  render() {    
    return (
      <div className='calc-container'>
        <h2>Average GPA across all grades - <span className='calc-GPA'>{this.state.GPA}</span></h2>
        
        <div className='calc-links-container'>
          {this.state.grades.map((item, i) => (
              <div  key={i} className={this.state.visible === i ? 'calc-active-link' : ''}>
                <button key={i} value={i} onClick={::this.gradeVisibility}>{item.gradeName}</button>
                <button className='calc-grade-del' key={i+1} value={i} onClick={::this.deleteGrade}>
                  X</button>
              </div>
            )
          )}
          <button className='calc-grade-add' onClick={::this.addGrade}>+</button>
        </div>
        <div className='calc-content-container'>
        {this.state.grades.map((item, i) => (
            <Grade key={i} number={i} visible={this.state.visible} data={item}
            gradeNameChange={::this.gradeNameChange} gradeGPAChange={::this.gradeGPAChange} />
          )
        )}
        </div>
      </div>
    )
  }
}
  