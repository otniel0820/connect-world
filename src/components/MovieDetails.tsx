import React from 'react'
import { Movie } from '@/interfaces/movie';
import Link from 'next/link';
import { useMovieTrailer } from '@/hooks/useMovieTrailer';

const MovieDetails: React.FC<{ movie: Movie }> = ({ movie }) => {

    const movieIdString = movie?.id.toString()
    const {trailer} = useMovieTrailer({id: movieIdString})

    console.log(trailer);
    

    if (!movie || !movie.genres) {
        return null;
    }
    return (
        <div className='text-white w-1/3 flex flex-col gap-4'>
            <section className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>Genero:</p>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </section>
            <section className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>Sinopsis:</p>
                <p>{movie.overview}</p>
            </section>
            <section className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>Duracion:</p>
                <p>{movie.runtime} minutos</p>
            </section>
            <section className='flex flex-col gap-2'>
                <p className='text-xl font-bold'>Valoracion:</p>
                <p>{movie.vote_average}  / 10</p>
            </section>
            <Link href={`https://www.youtube.com/watch?v=`}>
            
            </Link>
          
        </div>
      );
}

export default MovieDetails
