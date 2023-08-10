"use client"

import Button from '@/components/Button'
import { MyContextProvider } from '@/context/Context'
import ApiComponent from '@/request/Request'
import GenreSelection from '@/components/GenreSelection'
import { useMyContext } from '@/context/Context'

const Page: React.FC = () => {

  const { movieSelected, setMovieSelected } = useMyContext();
  
  return (
    <>
    <div>
      {!movieSelected ? (
      <MyContextProvider>
        <GenreSelection />
        <Button />
        <ApiComponent />
      </MyContextProvider>
      ) : (
        <h3> NAAOOOO </h3>
      )}
    </div>
    </>
  )
}

export default Page;
