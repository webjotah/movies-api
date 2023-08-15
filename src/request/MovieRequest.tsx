"use client"

import { useEffect } from "react";
import { useMyContext } from "@/context/Context";


const MovieSelection: React.FC = () =>  {
  const { movieSelected } = useMyContext();
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieSelected}?&api_key=c20492d18a33e7f71968eb5377feb1cb`)
        const data = await response.json();
        localStorage.setItem('titulo', data.title);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieSelected]);

  return true;
}

export default MovieSelection;
