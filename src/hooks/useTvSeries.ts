'use client'

import { TvSeries } from "@/interfaces/tvSeries";
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
      series: series as TvSeries[],
      isFetching,
    };
  };