import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LoadingComponent from "../shared/LoadingComponent";
import {useEffect} from "react";
import {State} from "../../types/reducer/State";
import {movieActions} from "../../store/movie/reducer";
import {Col, Row} from "reactstrap";

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
        {list.map(movie => {
          return (
            <Col md={6} lg={4} sm={12} key={movie.id} className="mt-4">
              <div style={{
                width: "100%",
                height: "auto",
              }} className="bg-light text-dark p-2 shadow rounded">
                <img src={`${movie.image}`}
                     className="w-100"
                     alt=""/>
              </div>
              {movie.name}
              <p>{movie.description}</p>
            </Col>
          )
        })}
      </Row>
    </LoadingComponent>
  )
}


export default MovieComponent;