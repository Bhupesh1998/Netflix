import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const ListofMovies = useSelector((store) => store.movies.nowPlayingMovies);
    console.log("lsit of mivers are", ListofMovies);

    return (
        <div className="bg-black">
            <MovieList MovieTitle={"Popular Movies"} MovieData={ListofMovies} />
            <MovieList MovieTitle={"Horror Movies"} MovieData={ListofMovies} />
            <MovieList MovieTitle={"Comedy Movies"} MovieData={ListofMovies} />
            <MovieList MovieTitle={"Action Movies"} MovieData={ListofMovies} />



        </div>
    )
}

export default SecondaryContainer;