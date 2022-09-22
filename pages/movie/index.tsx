import MovieComponent from "../../components/movie/MovieComponent";
import {useEffect} from "react";
import {movieActions} from "../../store/movie/reducer";
import {useDispatch} from "react-redux";

const Movie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll())
  }, [dispatch])

  return <MovieComponent/>
};

export default Movie;