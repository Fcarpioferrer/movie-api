import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ReducerNames} from "../../types/reducer/ReducerNames";
import {MovieState} from "./types";
import {State, States, statesType} from "../../types/reducer/State";
import {Movie} from "../../types/Movie";


const initialState: MovieState = {
  states: new States().toJson(),
  list: []
}

const slice = createSlice({
  name: ReducerNames.MOVIES,
  initialState,
  reducers: {
    getAll: () => {
    },
    setAll: (state, action: PayloadAction<Movie[]>) => {
      state.list = action.payload;
      state.states.getAll = State.FINISHED;
    },
    changeStates: (state, action: PayloadAction<{ key: statesType, state: State }>) => {
      state.states[action.payload.key] = action.payload.state;
    }
  }
});

export const movieActions = slice.actions;
export default slice.reducer;