import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {Task} from "@redux-saga/types";
import movieSagas from "./movie/saga";
import logger from "redux-logger";

export interface SagaStore extends Store {
  movieTask?: Task;
}

const rootReducer = combineReducers({movieReducer});
export type RootState = ReturnType<typeof rootReducer>;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) return {...state, ...action.payload};
  return rootReducer(state, action)
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware, logger];

const makeStore: any = () => {
  const store = configureStore({reducer, middleware, devTools: Boolean(process.env.REACT_APP_DEV_TOOLS)});
  (store as any).movieTask = sagaMiddleware.run(movieSagas);
  return store;

}

export const wrapper = createWrapper<SagaStore>(makeStore)