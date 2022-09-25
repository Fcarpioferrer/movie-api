import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LoadingComponent from "../shared/LoadingComponent";

const MovieComponent = () => {

  const {list, states} = useSelector((root: RootState) => root.movieReducer);

  console.log(list)

  return (
    <LoadingComponent state={states.getAll}>
      <div>
        movies loaded
      </div>
    </LoadingComponent>
  )
}


export default MovieComponent;