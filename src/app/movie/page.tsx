"use client"

import { useMyContext } from "@/context/Context";
import { dialogClasses } from "@mui/material";
import React, { useEffect } from "react";

const Movie: React.FC = () => {
  const { changed } = useMyContext();
  var teste =localStorage.getItem('titulo');
  var sim = false;
  useEffect(() => {
    teste = localStorage.getItem('titulo');
    console.log(teste);
  }, [localStorage.getItem('titulo')]);

  return (
    <div> {teste} </div>
  )
};

export default Movie;