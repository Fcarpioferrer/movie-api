import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import {Task} from "@redux-saga/types";
import movieSagas from "./movie/saga";
import logger from "redux-logger";
import {MovieState} from "./movie/types";

export interface SagaStore extends Store {
  movieTask?: Task;
}

const rootReducer = combineReducers({movieReducer});

export interface RootState {
  movieReducer: MovieState;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware, logger];

const makeStore: any = () => {
  const store = configureStore({reducer: rootReducer, middleware, devTools: Boolean(process.env.REACT_APP_DEV_TOOLS)});
  (store as any).movieTask = sagaMiddleware.run(movieSagas);
  return store;

}

export const store = makeStore();