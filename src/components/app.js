import React from 'react';
import { connect } from 'react-redux';

const App = ({user}) =>  {
		return <div>{ user }, hello from Test</div>
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(App);