import { TvSerie } from "@/interfaces/serie";
import { getTvSerieById } from "@/utils/getTvSerieById";
import { useQuery } from "@tanstack/react-query";

interface Options {
  id: string;
}

export const useTvSerie = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: serie,
    isFetching,
  } = useQuery({
    queryKey: ["serie", id],
    queryFn: () => getTvSerieById(id),
  });
  return {
    error,
    isError,
    isFetching,
    isLoading,
    serie: serie as TvSerie,
  };
};