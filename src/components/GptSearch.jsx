import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BGIMAGE } from '../constants'

// w-full h-screen absolute top-0 left-0 -z-10

function GptSearch() {
    return (
        <div >
            <div className='absolute -z-20 h-screen w-full top-0'>
                <img
                    src={BGIMAGE}
                    alt="ContentImage"
                    className="h-full w-full object-cover"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch