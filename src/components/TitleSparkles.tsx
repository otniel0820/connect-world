"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import { Media } from "./CardMovieDetails";

const TitleSparkles: React.FC<{ media: Media }> = ({ media }) => {

  let title: string = "";

  if (media) {
    if ("title" in media && media.title) {
      title = media.title; 
    } else if ("name" in media && media.name) {
      title = media.name; 
    }
  }

  return (
    <div className="w-full pt-10 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={5000}
          className="w-full h-full"
          particleColor="#fafafa"
          particleSize={700}
          speed={20}
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default TitleSparkles;
