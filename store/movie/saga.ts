import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import {Response} from "../../types/Response";
import {Movie} from "../../types/Movie";
import {getList} from "../../services/movieService";
import {movieActions} from "./reducer";
import {State} from "../../types/reducer/State";
import {ACTIONS_MOVIE} from "./types";
import {CreateError} from "../../utils";

function* listSaga() {
  try {
    const response: Response<Movie> = yield call(getList);
    if (response.success && response.items)
      yield put(movieActions.setAll(response.items));
    else
      CreateError(response.error ?? "Server failed to get movie!");
  } catch (e) {
    yield put(movieActions.changeStates({key: "getAll", state: State.REJECTED}))
  }
}

export default function* movieSagas(): any {
  yield all([
    takeEvery(ACTIONS_MOVIE.GET_ALL, listSaga)
  ])
}