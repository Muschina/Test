import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  render() {
    return (
      <div className='not-found-container'>
        Page not found. Go back to <Link to='/'>main page</Link>?
      </div>
    )
  }
}