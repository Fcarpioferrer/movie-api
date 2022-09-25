import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import movieSagas from "./movie/saga";
import logger from "redux-logger";
import {MovieState} from "./movie/types";

const rootReducer = combineReducers({movieReducer});

export interface RootState {
  movieReducer: MovieState;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware, logger];

const makeStore: any = () => {
  const store = configureStore({reducer: rootReducer, middleware, devTools: Boolean(process.env.REACT_APP_DEV_TOOLS)});
  sagaMiddleware.run(movieSagas);
  return store;

}

export const store = makeStore();