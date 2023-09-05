"use client"

import { useEffect } from "react";
import { useMyContext } from "@/context/Context";


const MovieSelection: React.FC = () =>  {
  const { movieSelected } = useMyContext();
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieSelected}?&api_key=c20492d18a33e7f71968eb5377feb1cb&append_to_response=videos,credits`)
        const data = await response.json();
        localStorage.setItem('title', data.title);
        localStorage.setItem('poster', data.poster_path);
        localStorage.setItem('overview', data.overview);
        localStorage.setItem('release_date', data.release_date);
        localStorage.setItem('runtime', data.runtime);
        localStorage.setItem('vote_average', data.vote_average);
        localStorage.setItem('genres', JSON.stringify(data.genres));
        
        const cast = data.credits.cast
        .filter((actor: any) => actor.known_for_department === "Acting")
        .map((actor: any) => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          profile_path: actor.profile_path,
        }));
        
        localStorage.setItem('cast', JSON.stringify(cast));

        for(let i = 0; i < data.videos.results.length; i++){
          if(data.videos.results[i].type === "Trailer"){
            localStorage.setItem('trailer', data.videos.results[i].key);
            break;
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieSelected]);

  return true;
}

export default MovieSelection;
