import { MovieTrailer } from "@/interfaces/movieTrailer";
import { getTrailerById } from "@/utils/getTrailerById";
import { useQuery } from "@tanstack/react-query";

interface Options {
  id: string;
}

export const useMovieTrailer = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: trailer,
    isFetching,
  } = useQuery({
    queryKey: ["trailer", id],
    queryFn: () => getTrailerById(id),
  });
  return {
    error,
    isError,
    isFetching,
    isLoading,
    trailer: trailer as MovieTrailer,
  };
};
