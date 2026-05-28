import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const ListofMovies = useSelector((store) => store.movies);

    return (
        <div className="bg-black">
            <MovieList MovieTitle={"Movies"} MovieData={ListofMovies.nowPlayingMovies} />
            <MovieList MovieTitle={"Popular Movies"} MovieData={ListofMovies.popularMovieList} />
            <MovieList MovieTitle={"Comedy Movies"} MovieData={ListofMovies.nowPlayingMovies} />
            <MovieList MovieTitle={"Action Movies"} MovieData={ListofMovies.nowPlayingMovies} />



        </div>
    )
}

export default SecondaryContainer;