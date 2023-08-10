import { useEffect } from "react";
import { useMyContext } from "@/context/Context";

const MovieSelection: React.FC = () =>  {
  const { movieSelected, setMovieSelected } = useMyContext();
  

  return <h1> Sim </h1>;
}

export default MovieSelection;
