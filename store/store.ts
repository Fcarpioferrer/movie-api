import {applyMiddleware, combineReducers, compose, createStore, Store} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import {Task} from "@redux-saga/types";
import movieSagas from "./movie/saga";

export interface SagaStore extends Store {
  movie?: Task;
}

const combinedReducer = combineReducers({movieReducer});

const sagaMiddleware = createSagaMiddleware();
declare var window: any;
const reducer = (state: ReturnType<typeof combinedReducer>, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [sagaMiddleware];

export const makeStore = () => {
  const store = createStore(reducer as any, composeEnhancers(applyMiddleware(...middleware)));
  (store as SagaStore).movie = sagaMiddleware.run(movieSagas);
  return store as SagaStore;
};


export type RootState = ReturnType<typeof combinedReducer>;

export const wrapper = createWrapper<ReturnType<typeof makeStore>>(makeStore, {debug: true});