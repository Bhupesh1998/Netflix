import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ MovieId }) => {
    const Trailer = useSelector((store) => store.movies.VideoTrailer)
    useMovieTrailer(MovieId);

    return (
        <div className="w-full h-screen absolute top-0 left-0 -z-10">
            <iframe

                className="w-full h-full"
                src={"https://www.youtube.com/embed/" + Trailer?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allowfullscreen
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;