import React, { Component } from 'react';
import NavLink from './navLink/navLink';

export default class App extends Component {
  render() {
    console.log(NavLink);
    return (
      <div className='app-container'>
        <nav>
          <NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink>
          <NavLink to='/domino'>Domino</NavLink>
          <NavLink to='/school_GPA_calculator'>School GPA Calculator</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}