"use client";

import Navbar from "@/components/Navbar";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { useMovies } from "@/hooks/useMovies";

export default function Home() {
  const { movies } = useMovies();

  const transformedMovies = movies?.map((movie) => ({
    title: movie.title,
    link: `/movie/${movie.id}`,
    thumbnail: movie.poster_path,
  }));

  return (
    <main className="relative">
      <HeroParallax products={transformedMovies} />
      <div className="absolute top-0 w-full z-10">
        <Navbar />
      </div>
    </main>
  );
}
