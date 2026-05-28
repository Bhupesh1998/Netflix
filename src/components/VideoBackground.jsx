import { useEffect, useState } from "react";
import { VideoURL, options } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { MovieTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ MovieId }) => {
    const dispatch = useDispatch();
    const FetchVieoData = async () => {
        const data = await fetch(`${VideoURL}${MovieId}/videos`, options);
        const json = await data.json();
        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        const Trailer = json.results ? filterData[0] : json.results[0];
        dispatch(MovieTrailerVideo(Trailer));
    }

    const Trailer = useSelector((store) => store.movies.VideoTrailer)

    useEffect(() => {
        FetchVieoData();
    }, [])

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + Trailer?.key}
                title="YouTube video player"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;