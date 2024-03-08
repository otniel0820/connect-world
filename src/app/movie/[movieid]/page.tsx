"use client";

import CardMovieDetails from "@/components/CardMovieDetails";
import  TitleSparkles  from "@/components/TitleSparkles";
import { useMovie } from "@/hooks/useMovie";
import React from "react";

const Page = ({ params }: { params: { movieid: string } }) => {
  const { movie } = useMovie({ id: params.movieid });

  return (
    <div>
      <TitleSparkles movie={movie} />
      <CardMovieDetails movie={movie} />
    </div>
  );
};

export default Page;
