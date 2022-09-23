import MovieComponent from "../../components/movie/MovieComponent";
import {movieActions} from "../../store/movie/reducer";
import {wrapper} from "../../store/store";
import {END} from "redux-saga";

const Movie = () => <MovieComponent/>;

export const getServerSideProps = wrapper
  .getServerSideProps((store) =>
    async () => {
      await store.dispatch(movieActions.getAll());
      store.dispatch(END);
      await store.movieTask?.toPromise();
      return {
        props: {}
      }
    });

export default Movie;