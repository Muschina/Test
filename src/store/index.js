import { createStore, combineReducers, applyMiddleware } from 'redux';
import domino from '../components/domino/domino.reducer';
import dominoForm from '../components/domino/components/newDomino/newDominoForm.reducer';
import createLogger from 'redux-logger';

export default function appStore(initialState) {
	const log = createLogger();

	const store = createStore(combineReducers({
			domino,
			dominoForm
		}), 
		initialState,
		applyMiddleware(log))

	if (module.hot) {
    module.hot.accept('../components/domino/domino.reducer', () => {
      const nextRootReducer = require('../components/domino/domino.reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

	return store;
} 