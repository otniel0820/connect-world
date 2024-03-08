'use client'

import { getSeries } from "@/utils/getTvSeriesData";
import { useQuery } from "@tanstack/react-query";



export const useTvSeries = () => {
    const {
      isLoading,
      isError,
      data: series = [],
      isFetching,
    } = useQuery({
      queryKey: ["series"],
      queryFn: getSeries,
    });
    return {
      isLoading,
      isError,
      series,
      isFetching,
    };
  };