export const getTrailerById = async (id: string) => {
    const movieTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=70842f43bf75921d2a7464423c5f3746&language=es-ES`;
  
    try {
      const response = await fetch(movieTrailer, { cache: "no-cache" });
      const data = await response.json();
      const movieData = await data.results;
  
      return movieData;
    } catch (error) {
      console.error(error);
    }
  };
  