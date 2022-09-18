import MovieComponent from "../../components/movie/MovieComponent";
import {wrapper} from "../../store/store";
import {movieActions} from "../../store/movie/reducer";
import {connect} from "react-redux";

const Movie = () => <MovieComponent/>;


export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({req}) => {
      await store.dispatch(movieActions.getAll());
      return {
        props: {},
      };
    }
);
export default connect(state => state)(Movie);