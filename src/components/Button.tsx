import React from "react";
import { useMyContext } from "@/context/Context";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Button: React.FC = () => {
  const { page, setPage } = useMyContext();
  

  return (
    <div className="flex justify-center items-center gap-3 py-3">
      <button onClick={() => {page > 1 ? setPage(page - 1) : setPage(1)}}><ChevronLeft size={35}/></button>
      <p className="text-2xl text-foreground">{page}</p>
      <button onClick={() => {setPage(page + 1)}}> <ChevronRight size={35} /> </button> <br/>
    </div>
  )
}

export default Button;