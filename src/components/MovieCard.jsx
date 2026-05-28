import React from 'react'
import { CDNImagePath } from '../constants'

function MovieCard({ MovieData }) {

    return (
        <div className=' mx-2.5 flex overflow-scroll gap-3 shadow-2xl p-4'>
            {MovieData?.map((movies) =>
                <img
                    key={movies.id}
                    className='w-50 rounded-sm shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl'
                    src={CDNImagePath + movies.poster_path}
                    alt="" />
            )}
        </div>
    )
}

export default MovieCard