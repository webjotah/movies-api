"use client"

import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";

const opts = {
  height: '320',
  width: '570',
}

const Movie: React.FC = () => {

  const [storedTitle, setStoredTitle] = useState<any>(null);
  const [trailer, setTrailer] = useState<any>(null);
  const [date, setDate] = useState<any>(null);
  const [overview, setOverview] = useState<any>(null);
  const [poster, setPoster] = useState<any>(null);
  const [runtime, setRuntime] = useState<any>(null);
  const [votes, setVotes] = useState<any>(null);
  const[genres, setGenres] = useState<any>(null);
  

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

  return (
    <div>
      <h2>Título do Filme: {storedTitle}</h2>
      <Youtube videoId={trailer} opts={opts}/>
    </div>
  );
};

export default Movie;