import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ MovieId }) => {
    const Trailer = useSelector((store) => store.movies.VideoTrailer)
    useMovieTrailer(MovieId);

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