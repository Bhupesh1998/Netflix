import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';

const Browse = () => {
    useNowPlayingMovies();

    const movieData = useSelector((store) => store?.movies?.nowPlayingMovies);
    // if(movieData == null) return;
    if (!movieData) return;

    const { original_title, overview, id } = movieData[0];

    return (
        <div>
            <Header />
            <MainContainer title={original_title} overview={overview} />
            <VideoBackground MovieId={id} />
            <SecondaryContainer />
        </div>)
}

export default Browse;