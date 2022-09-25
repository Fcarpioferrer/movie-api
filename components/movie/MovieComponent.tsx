import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LoadingComponent from "../shared/LoadingComponent";
import {useEffect} from "react";
import {State} from "../../types/reducer/State";
import {movieActions} from "../../store/movie/reducer";
import {Row} from "reactstrap";
import MovieItem from "../shared/MovieItem";

const MovieComponent = () => {

  const {list, states: {getAll}} = useSelector((root: RootState) => root.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAll === State.IDLE) {
      dispatch(movieActions.getAll());
    }
  }, [getAll, dispatch]);

  return (
    <LoadingComponent state={getAll}>
      <Row>
        {list.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
      </Row>
    </LoadingComponent>
  )
}


export default MovieComponent;