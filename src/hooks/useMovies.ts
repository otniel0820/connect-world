'use client'

import { Movies } from "@/interfaces/movies";
import { getMovies } from "@/utils/getMovieData";
import { useQuery } from "@tanstack/react-query";



export const useMovies = () => {
    const {
      isLoading,
      isError,
      data: movies = [],
      isFetching,
    } = useQuery({
      queryKey: ["movies"],
      queryFn: getMovies,
    });
    return {
      isLoading,
      isError,
      movies: movies as Movies[],
      isFetching,
    };
  };