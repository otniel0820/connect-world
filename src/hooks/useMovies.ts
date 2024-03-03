'use client'

import { getMovies } from "@/utils/movieData";
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
      movies,
      isFetching,
    };
  };