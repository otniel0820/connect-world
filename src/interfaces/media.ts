import { Genre } from './movie';


export interface Media{
    poster_path: string;
    title: string;
    name: string;
    id: number;
    genre:  Array<Genre>;
    overview: string;
    runtime: number;
    vote_average: number;
}