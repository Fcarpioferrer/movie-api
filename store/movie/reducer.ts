import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReducerNames} from "../../types/reducer/ReducerNames";
import {MovieState} from "./types";
import {State, States, StateType} from "../../types/reducer/State";
import {MovieResult} from "../../types/Movie";


const initialState: MovieState = {
  states: {
    getAll: State.IDLE,
    update: State.IDLE,
    delete: State.IDLE,
    get: State.IDLE,
    create: State.IDLE,
    other: State.IDLE,
  },
  list: []
}

const slice = createSlice({
  name: ReducerNames.MOVIES,
  initialState: initialState,
  reducers: {
    getAll: (state: MovieState) => {
      state.states.getAll = State.LOADING;
    },
    setAll: (state: MovieState, action: PayloadAction<MovieResult[]>) => {
      state.list = action.payload;
      state.states.getAll = State.FINISHED;
    },
    changeStates: (state: MovieState, action: PayloadAction<{ key: StateType, state: State }>) => {
      state.states[action.payload.key] = action.payload.state;
    }
  }
});

export const movieActions = slice.actions;
export default slice.reducer;