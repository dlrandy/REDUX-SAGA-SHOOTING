import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const enhancer = composeEnhancers(applyMiddleware(...[sagaMiddleware]),
// other store enhancers if any
);

export const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga)