const url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=70842f43bf75921d2a7464423c5f3746&language=es-ES&page=1'

export const getSeries = async () => {
    try {
      const response = await fetch(url, { cache: "no-cache" });
      const data = await response.json();
      const seriesData = await data.results;
  
      return seriesData;
    } catch (error) {
      console.error(error);
    }
  };