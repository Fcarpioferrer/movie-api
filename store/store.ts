import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./movie/reducer";
import movieSagas from "./movie/saga";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {Task} from "@redux-saga/types";
import thunk from "redux-thunk";

export interface SagaStore extends Store {
  movieTask?: Task;
}

const combinedReducer = combineReducers({movieReducer});
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, ...getDefaultMiddleware(), sagaMiddleware];
export type RootState = ReturnType<typeof combinedReducer>;

const reducer = (state: any, action: any) => {

  if (action.type === HYDRATE) {
    return {...state, ...action.data};
  }

  return combinedReducer(state, action);
};

export const makeStore = () => {
  const store = configureStore({
    reducer,
    middleware,
    devTools: true
  });

  (store as SagaStore).movieTask = sagaMiddleware.run(movieSagas);

  return store as SagaStore;
};


export const wrapper = createWrapper<SagaStore>(makeStore)