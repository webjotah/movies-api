"use client"

import { useMyContext } from '@/context/Context';
import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';



const ApiComponent: React.FC = () => {
  const [movies, setMovies] = useState<any>(null);
  const { page,  genresId, setMovieSelected} = useMyContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=c20492d18a33e7f71968eb5377feb1cb`)
        const data = await response.json();
        setMovies(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [page]);

  if (!movies) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {genresId.length > 0 ? movies.results.filter((movie: any) => movie.genre_ids.some((genreId: number) => genresId.includes(genreId))).map((movie: any) => (
          <MovieCard key={movie.id} id={movie.id} picture={movie.poster_path} title={movie.title}/>
        )) : movies.results.map((movie: any) => (
          <MovieCard key={movie.id} id={movie.id} picture={movie.poster_path} title={movie.title}/>
        ))}
      </ul>
    );
  }
}

export default ApiComponent;

