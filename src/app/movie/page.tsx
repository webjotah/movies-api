"use client"

import React, { Suspense, useEffect, useState } from "react";
import Youtube from "react-youtube";
import LoadingOverlay from "@/components/Loading";

const opts = {
  height: '320',
  width: '570',
}

const Movie: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [storedTitle, setStoredTitle] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>(null);
  const [date, setDate] = useState<any>(null);
  const [overview, setOverview] = useState<any>(null);
  const [poster, setPoster] = useState<any>(null);
  const [runtime, setRuntime] = useState<any>(null);
  const [votes, setVotes] = useState<any>(null);
  const [genres, setGenres] = useState<any[]>([]);
  const [actors, setActors] = useState<any[]>([]);
  

  useEffect(() => {
    const handleStorageChange = () => {
      setTimeout(() => {
        const newTitle = localStorage.getItem('title');
        const newTrailer = localStorage.getItem('trailer');
        const newDate = localStorage.getItem('release_date')?.split('-').reverse().join('/');
        const newOverview = localStorage.getItem('overview');
        const newPoster = localStorage.getItem('poster_path');
        const newRuntime = localStorage.getItem('runtime');
        const newVotes = localStorage.getItem('vote_average');
        const newGenres = localStorage.getItem('genres');
        const newActors = localStorage.getItem('cast');

        if(newGenres){
          try {
            const genres = JSON.parse(newGenres);
            setGenres(genres);
          } catch (error){
            console.log("Erro no parsing de generos: ", error);
          }
        }

        if(newActors){
          try{
            const actors = JSON.parse(newActors);
            setActors(actors);
          }  catch (error){
            console.log("Erro no parsing de atores: ", error);
          }
        }

        setVotes(newVotes);
        setRuntime(newRuntime);
        setPoster(newPoster);
        setOverview(newOverview);
        setDate(newDate);
        setTrailer(newTrailer);
        setStoredTitle(newTitle);
      }, 500);
    };

    handleStorageChange();
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

    return (
      <div>
        <LoadingOverlay loading={isLoading} />
        <h2>{storedTitle}</h2>
        <Youtube videoId={trailer} opts={opts} />
      </div>
    );
};

export default Movie;
