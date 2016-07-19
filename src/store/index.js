import { createStore } from 'redux';
import appReducer from '../components/appReducer';

export default function appStore(initialState) {
	const store = createStore(appReducer, initialState)
	return store;
} 