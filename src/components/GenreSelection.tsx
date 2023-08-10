import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useMyContext } from "@/context/Context";
import { useState } from 'react';


//chamar o context

const GenreSelection: React.FC = () => {
  const { genresId,  setGenresId } = useMyContext();
  
  const generos = [
    { title: 'Ação', id: 28 },
    { title: 'Aventura', id: 12 },
    { title: 'Animação', id: 16 },
    { title: 'Comédia', id: 35 },
    { title: 'Crime', id: 80 },
    { title: 'Documentário', id: 99 },
    { title: 'Drama', id: 18 },
    { title: 'Família', id: 10751 },
    { title: 'Fantasia', id: 14 },
    { title: 'História', id: 36 },
    { title: 'Terror', id: 27 },
    { title: 'Música', id: 10402 },
    { title: 'Mistério', id: 9648 },
    { title: 'Romance', id: 10749 },
    { title: 'Ficção científica', id: 878 },
    { title: 'Cinema TV', id: 10770 },
    { title: 'Thriller', id: 53 },
    { title: 'Guerra', id: 10752 },
    { title: 'Faroeste', id: 37 },
  ];




  return (
    <Autocomplete
      className="text-slate-100 w-1/3 bg-slate-50"
      multiple
      id="tags-outlined"
      options={generos}
      getOptionLabel={(option) => option.title}
      filterSelectedOptions
      onChange={(event: React.SyntheticEvent<Element, Event>, value: { title: string; id: number; }[]) => {
        setGenresId(value.map(item => item.id));
}}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Escolha um gênero"
        />
      )}
    />
  );
}

export default GenreSelection;