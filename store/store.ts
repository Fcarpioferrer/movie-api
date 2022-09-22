import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import {createWrapper} from "next-redux-wrapper";
import {Task} from "@redux-saga/types";
import {createLogger} from 'redux-logger'
import movieSagas from "./movie/saga";

export interface SagaStore extends Store {
  movieTask?: Task;
}

const reducer = combineReducers({movieReducer});
export type RootState = ReturnType<typeof reducer>;

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


const middleware = [...getDefaultMiddleware(), sagaMiddleware, logger];

const makeStore: any = () => {
  const store = configureStore({
    reducer,
    middleware,
    devTools: Boolean(process.env.DEV_TOOLS)
  });
  (store as any).movieTask = sagaMiddleware.run(movieSagas);
  return store;

}


export const wrapper = createWrapper<SagaStore>(makeStore)