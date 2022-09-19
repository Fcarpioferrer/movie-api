import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {State} from "../../types/reducer/State";
import {useEffect} from "react";
import {movieActions} from "../../store/movie/reducer";

const MovieComponent = () => {

  const {list, states} = useSelector((root: RootState) => root.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getAll())
  }, [dispatch])

  useEffect(() => {
    console.log(list)
  }, [list])


  if (states.getAll === State.LOADING) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      movies loaded
    </div>
  )
}


export default MovieComponent;