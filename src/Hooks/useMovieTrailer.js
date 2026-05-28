import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieTrailerVideo } from "../utils/moviesSlice";
import { options, VideoURL } from "../constants";

const useMovieTrailer = (MovieId) => {

    const dispatch = useDispatch();
    const FetchVieoData = async (MovieId) => {
        const data = await fetch(`${VideoURL}${MovieId}/videos`, options);
        const json = await data.json();
        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        const Trailer = json.results ? filterData[0] : json.results[0];
        dispatch(MovieTrailerVideo(Trailer));
    }

    useEffect(() => {
        FetchVieoData(MovieId);
    }, [MovieId])

}

export default useMovieTrailer;