"use client"

import { useEffect } from "react";
import { useMyContext } from "@/context/Context";
import { useState } from "react";
import { data } from "autoprefixer";


const MovieSelection: React.FC = () =>  {
  const { movieSelected, setChanged } = useMyContext();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieSelected}?&api_key=c20492d18a33e7f71968eb5377feb1cb`)
        const data = await response.json();
        localStorage.setItem('titulo', data.title);
        setChanged(true);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieSelected]);
  
  return <h1> foi </h1>;
}

export default MovieSelection;
