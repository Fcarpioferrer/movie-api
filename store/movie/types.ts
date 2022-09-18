import {States} from "../../types/reducer/State";
import {Movie} from "../../types/Movie";

export interface MovieState {
  states: States,
  list: Movie[]
}

export enum ACTIONS_MOVIE {
  GET_ALL = "MOVIES/getAll",
  DELETE = "MOVIES/delete",
  UPDATE = "MOVIES/get",
  CREATE = "MOVIES/create",
  GET = "MOVIES/get",
}