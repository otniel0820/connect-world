"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mt-16"
      >
        <div className="flex flex-col gap-4 items-center ">
          <Image
            src={
              'https://i.ibb.co/yV6ZLsz/dame-una-imagen-que-diga-free-trial-removebg-preview.png"'
            }
            alt="Free trial"
            width={300}
            height={200}
            className="mt-10"
          />
          <h1>¿Deseas una Prueba Gratis?</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-xl"
      >
        <div className="flex flex-col gap-5">
           <p>Te ofrecemos una prueba para que aprendas a usar nuestra plataforma{" "}
        <br /> y verifiques si nuestro contenido digital se ajusta a lo que
        estas buscando.</p> 
        <Link href={''}>
        
        <Button variant={'primary'} >Solicitar prueba Gratis</Button>
        </Link>
        </div>
        
      </motion.div>
    </LampContainer>
  );
}
