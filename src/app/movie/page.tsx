"use client"

import React, { useEffect, useState } from "react";

const Movie: React.FC = () => {

  const [storedTitle, setStoredTitle] = useState<any>(null);
  

  useEffect(() => {

    const handleStorageChange = () => {
      setTimeout(() => {
        const newTitle = localStorage.getItem('titulo');
        setStoredTitle(newTitle);
      }, 500);
    };


    handleStorageChange();
  }, []);

  console.log(storedTitle);

  return (
    <div>
      <h2>Título do Filme: {storedTitle}</h2>
    </div>
  );
};

export default Movie;