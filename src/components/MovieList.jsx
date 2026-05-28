import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ MovieTitle, MovieData }) {
    return (
        <div className=' text-white py-2'>
            <div className='font-bold text-lg mx-2.5'>{MovieTitle}</div>
            <div>
                <MovieCard MovieData={MovieData} />
            </div>
        </div>
    )
}

export default MovieList