import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReducerNames} from "../../types/reducer/ReducerNames";
import {MovieState} from "./types";
import {State, States, StateType} from "../../types/reducer/State";
import {MovieResult} from "../../types/Movie";


const initialState: MovieState = {
  states: new States().toJson(),
  list: []
}

const slice = createSlice({
  name: ReducerNames.MOVIES,
  initialState,
  reducers: {
    getAll: (state) => {
      state.states.getAll = State.LOADING;
    },
    setAll: (state, action: PayloadAction<MovieResult[]>) => {
      state.list = action.payload;
      state.states.getAll = State.FINISHED;
    },
    changeStates: (state, action: PayloadAction<{ key: StateType, state: State }>) => {
      state.states[action.payload.key] = action.payload.state;
    }
  }
});

export const movieActions = slice.actions;
export default slice.reducer;