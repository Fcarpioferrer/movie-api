import MovieComponent from "../../components/movie/MovieComponent";

const Movie = () => <MovieComponent/>;

/*export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({req}) => {

      await store.dispatch(movieActions.getAll());
      store.dispatch(END);
      await store.movieTask?.toPromise();
      return {
        props: {},
      };
    }
);*/


export default Movie;