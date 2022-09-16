export default function paths() {
  const defaultPath: string = "/api/v2";

  function setId(id?: string | number): string {
    return id ? `/${id}` : "";
  }

  return {
    movies: (id?: string) => {
      return defaultPath.concat("movies", setId(id))
    },
    genres: (id?: string) => {
      const pathGenre = "/genre"
      return {
        get: () => defaultPath.concat("genres", setId(id)),
        toMovie: () => defaultPath.concat(pathGenre, "/to/movie"),
        removeFromMovie: (genre: number, movie: number) => defaultPath.concat(pathGenre, setId(genre), "/movie", setId(movie))
      }
    },
    casts: (id?: string) => {
      const pathGenre = "/cast"
      return {
        get: () => defaultPath.concat("casts", setId(id)),
        toMovie: () => defaultPath.concat(pathGenre, "/to/movie"),
        removeFromMovie: (genre: number, movie: number) => defaultPath.concat(pathGenre, setId(genre), "/movie", setId(movie))
      }
    },
    titles: (id?: string) => {
      const pathGenre = "/title"
      return {
        get: () => defaultPath.concat("titles", setId(id)),
        toMovie: () => defaultPath.concat(pathGenre, "/to/movie"),
        removeFromMovie: (genre: number, movie: number) => defaultPath.concat(pathGenre, setId(genre), "/movie", setId(movie))
      }
    }
  }
}