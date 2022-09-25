import {States} from "../../types/reducer/State";
import {MovieResult} from "../../types/Movie";

export interface MovieState {
  states: States,
  list: MovieResult[]
}

export enum ACTIONS_MOVIE {
  GET_ALL = "MOVIES/getAll",
  DELETE = "MOVIES/delete",
  UPDATE = "MOVIES/get",
  CREATE = "MOVIES/create",
  GET = "MOVIES/get",
}