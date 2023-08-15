import React from "react";
import { useMyContext } from "@/context/Context";

const Button: React.FC = () => {
  const { page, setPage } = useMyContext();
  

  return (
    <div>
    <button onClick={() => {setPage(page + 1); localStorage.clear()}}> proxima </button> <br/>
    <button onClick={() => {page > 1 ? setPage(page - 1) : setPage(1)}}>anterior</button>
    </div>
  )
}

export default Button;