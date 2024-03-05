const url =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=70842f43bf75921d2a7464423c5f3746&language=es-ES&page=1";
export const getMovies = async () => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    const moviesData = await data.results;

    return moviesData;
  } catch (error) {
    console.error(error);
  }
};
