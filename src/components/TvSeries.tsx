'use client'

import { useTvSeries } from "@/hooks/useTvSeries";
import { HoverEffect } from "./ui/HoverEffect";
 
export function TvSeries() {
    const {series} = useTvSeries()
    const transformedSeries = series?.map((serie) => ({
        title: serie.name,
        link: `/series/${serie.id}`,
        thumbnail: serie.poster_path,
      }));
    
  return (
    <div className="max-w-7xl mx-auto px-8 flex flex-col items-center pt-5">
        <h1 className="text-white text-7xl">Series</h1>
      <HoverEffect items={transformedSeries} />
    </div>
  );
}
