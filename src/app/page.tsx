'use client'

import Navbar from "@/components/Navbar";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { useMovies } from "@/hooks/useMovies";
import { useTvSeries } from "@/hooks/useTvSeries";


export default function Home() {
  const {movies}= useMovies()
  const {series}= useTvSeries()

  const movieParallax = [
    
    {
      title: movies.title,
      thumbnail: movies.poster_path,
      link: ''
    }
    
  
]

  
  console.log(movies);
  
  return (
    <main className="relative">
      <HeroParallax products={movieParallax}/>
      <div className="absolute top-0 w-full z-10">
        <Navbar/>
      </div>
      
    </main>
  );
}
