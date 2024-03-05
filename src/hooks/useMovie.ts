import { Movie } from "@/interfaces/movie";
import { getMovieById } from "@/utils/movieById";
import { useQuery } from "@tanstack/react-query";

interface Options {
  id: string;
}

export const useMovie = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: movie,
    isFetching,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
  });
  return {
    error,
    isError,
    isFetching,
    isLoading,
    movie: movie as Movie,
  };
};
