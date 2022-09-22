import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {State} from "../../types/reducer/State";

const MovieComponent = () => {

  const {list, states} = useSelector((root: RootState) => root.movieReducer);

  console.log(list)

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