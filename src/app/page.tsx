"use client"

import Button from '@/components/Button'
import { MyContextProvider } from '@/context/Context'
import ApiComponent from '@/request/Request'
import GenreSelection from '@/components/GenreSelection'
import Link from 'next/link'
import MovieSelection from '@/request/MovieRequest'
import Movie from './movie/page'

export default function Page(){
  return (
    <>
    <div>
      <button><Link href="/movie"> Teste aaaaa</Link></button>
      <MyContextProvider>
        <GenreSelection />
        <Button />
        <ApiComponent />
        <MovieSelection />
        <Movie />
      </MyContextProvider>
    </div>
    </>
  )

}
