export const getMovieById = async (id: string) => {
  const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=70842f43bf75921d2a7464423c5f3746&language=es-ES`;

  try {
    const response = await fetch(movieUrl, { cache: "no-cache" });
    const data = await response.json();
    const movieData = await data;

    return movieData;
  } catch (error) {
    console.error(error);
  }
};
