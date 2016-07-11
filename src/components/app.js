import React, { Component } from 'react';
import NavLink from './navLink/navLink';

import './app.less';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <nav className='app-navigation'>
          <NavLink onlyActiveOnIndex={true} to='/'>Home</NavLink>
          <NavLink to='/domino'>Domino</NavLink>
          <NavLink to='/school_GPA_calculator'>School GPA Calculator</NavLink>
          <a href='https://github.com/Muschina/test'>GitHub link</a>
        </nav>
        <div className='content-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}