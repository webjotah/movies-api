import React, { createContext, useContext, useState } from 'react';

interface MyContextProviderProps {
  children: React.ReactNode;
}

// --- Pages Context --- //

interface ContextProps {
  page: number;
  setPage: (value: number) => void;
  genresId: number[];
  setGenresId: (value: number[]) => void;
  movieSelected: boolean;
  setMovieSelected: (value: boolean) => void;
}


const MyContext = createContext<ContextProps>({} as ContextProps);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [genresId,  setGenresId] = useState<number[]>([]);
  const [movieSelected, setMovieSelected] = useState<boolean>(false);

  const value: ContextProps = {
    page,
    setPage,
    genresId,
    setGenresId,
    movieSelected,
    setMovieSelected
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = (): ContextProps => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext deve ser usado dentro de um MyContextProvider');
  }

  return context;
};