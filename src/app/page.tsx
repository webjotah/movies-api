"use client"

import Button from '@/components/Button'
import { MyContextProvider, useMyContext } from '@/context/Context'
import ApiComponent from '@/request/Request'
import GenreSelection from '@/components/GenreSelection'
import Link from 'next/link'
import MovieSelection from '@/request/MovieRequest'
import Movie from './movie/page'

export default function Page(){

  const handleFalse = () => {
    localStorage.clear();
  }
  
  window.addEventListener('popstate', handleFalse);


  return (
    <>
    <div>
      <MyContextProvider>
        <GenreSelection />
        <Button />
        <ApiComponent />
        <MovieSelection />
      </MyContextProvider>
    </div>
    </>
  )

}
