import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies from '../Hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import GptSearch from './GptSearch';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    const isGptEnabled = useSelector((store) => store.gpt.toggelmyGpt);


    const movieData = useSelector((store) => store?.movies?.nowPlayingMovies);
    // if(movieData == null) return;
    if (!movieData) return;

    const { original_title, overview, id } = movieData[0];

    return (
        <div>
            <div className="relative h-screen">
                <Header />
                {isGptEnabled ? <GptSearch /> :
                    <>
                        <MainContainer title={original_title} overview={overview} />
                        <VideoBackground MovieId={id} />
                    </>
                }

            </div>
            {!isGptEnabled && <SecondaryContainer />}
        </div>)
}

export default Browse;