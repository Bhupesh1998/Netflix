import React from 'react'

function GptSearchBar() {
    return (
        <div className='flex justify-center '>
            <form action="" className=' w-1/2 grid bg-black grid-cols-12'>
                <input className='p-4 m-4 col-span-9 text-amber-50' type="text" placeholder='what is your mood today' />
                <button className='col-span-3 m-4 py-4 px-4 bg-red-700 text-amber-50 rounded-lg'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar