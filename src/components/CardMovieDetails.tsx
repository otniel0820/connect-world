import { Movie } from "@/interfaces/movie";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/CardMovie";
import Image from "next/image";

const CardMovieDetails: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {`Nombre: ${" "}${movie?.title}`}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
            height="500"
            width="500"
          />
        </CardItem>
        <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            {`Sinopsis: ${" "}${movie?.overview}`}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default CardMovieDetails;
