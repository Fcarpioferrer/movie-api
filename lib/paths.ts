type ID = (string | number)[];

export default function paths(...ids: ID) {
  const defaultPath: string = "/api/v2";

  function getPathFromIds(path: string, ids: ID, ...keys: string[]): string {
    return keys.reduce((ph: string, id, i) => {
      return ph.replace(id, ids[i]?.toString());
    }, path).split("/:").shift() ?? "";
  }

  return {
    movies: {
      get: () => getPathFromIds(defaultPath.concat("/movies/:id"), ids, "id")
    },
    genres: {
      get: () => getPathFromIds(defaultPath.concat("/genres/:id"), ids, "id"),
      setToMovie: () => defaultPath.concat("/genre/to/movie"),
      removeFromMovie: () => getPathFromIds(defaultPath.concat("/genre/:genreId/movie/:movieId"), ids, "genreId", "movieId")
    },
    titles: {
      get: () => getPathFromIds(defaultPath.concat("/titles/:id"), ids, "id"),
      setToMovie: () => defaultPath.concat("/genre/to/movie"),
      removeFromMovie: () => getPathFromIds(defaultPath.concat("/genre/:genreId/movie/:movieId"), ids, "genreId", "movieId")
    },
    casts: {
      get: () => getPathFromIds(defaultPath.concat("/casts/:id"), ids, "id"),
      setToMovie: () => defaultPath.concat("/cast/to/movie"),
      removeFromMovie: () => getPathFromIds(defaultPath.concat("/cast/:castId/movie/:movieId"), ids, "castId", "movieId")
    },
  }
}