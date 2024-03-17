import React from "react";
import { Movie } from "@/interfaces/movie";
import Link from "next/link";
import { useMovieTrailer } from "@/hooks/useMovieTrailer";
import { Button } from "./Button";
import { Media } from "./CardMovieDetails";
import { TvSerie } from "@/interfaces/serie";

const MovieDetails: React.FC<{ media: Media }> = ({ media }) => {
  console.log(media);
  
  const movieIdString = media?.id.toString();
  const { trailer, isFetching } = useMovieTrailer({ id: movieIdString });

  if (isFetching) {
    return <p>Cargando información del tráiler...</p>;
  }

  const officialTrailers = trailer?.filter(
    (trailer) =>
      trailer.official &&
      (trailer.type === "Trailer" || trailer.type === "Teaser")
  );

  const officialTrailer =
   officialTrailers && officialTrailers.length > 0 ? officialTrailers[0] : null;

  if (!media || !media.genres) {
    return null;
  }

  //funcion para sacar la duracion ya que en peliculas no es igual que en series y si no realizo esta funcion me daria un error por el tipado 
  const getDuration = (media: Media): string => {
    if ("runtime" in media && (media as Movie).runtime) {
      return `${(media as Movie).runtime} minutos`; 
    } else if ("episode_run_time" in media && (media as TvSerie).episode_run_time) {
      return `${(media as TvSerie).episode_run_time[0]} minutos por episodio`;
    } else {
      return "Duración desconocida";
    }
  };

  
  return (
    <div className="text-white w-1/3 flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <p className="text-xl font-bold">Genero:</p>
        <p>{media.genres.map((genre) => genre.name).join(", ")}</p>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-xl font-bold">Sinopsis:</p>
        <p>{media.overview}</p>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-xl font-bold">Duracion:</p>
        <p>{getDuration(media)}</p>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-xl font-bold">Valoracion:</p>
        <p>{media.vote_average} / 10</p>
      </section>
      <section className="flex justify-center pt-5">
      {officialTrailer && (
          <Link
            href={`https://www.youtube.com/watch?v=${officialTrailer.key}`}
            target="_blank"
          >
            <Button variant={"primary"}>Trailer Oficial</Button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default MovieDetails;
