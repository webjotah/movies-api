import React from "react";
import Link from "next/link";
import { useMyContext } from "@/context/Context";


interface MovieCardProps {
    id: number;
    picture: string;
    title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, picture, title }) => {

    const { setMovieSelected } = useMyContext()

    return (
        <li key={id}>
            <Link href='../movie'><img src={`https://image.tmdb.org/t/p/w500${picture}`} alt={title} onClick={() => (setMovieSelected(id))}/></Link>
            <h3>{title}</h3>
        </li>
    )
}

export default MovieCard;
