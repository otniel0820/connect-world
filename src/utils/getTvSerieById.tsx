export const getTvSerieById = async (id: string) => {
    const tvSerieUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=70842f43bf75921d2a7464423c5f3746&language=es-ES`;
  
    try {
      const response = await fetch(tvSerieUrl, { cache: "no-cache" });
      const data = await response.json();
      const tvSerieData = await data;

      console.log(tvSerieData);
      
  
      return tvSerieData;
    } catch (error) {
      console.error(error);
    }
  };
  