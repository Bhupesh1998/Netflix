import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

function GptSearchBar() {
    const currentLanguage = useSelector((store) => store);
    console.log("@@@currentLanguage", currentLanguage.appLanguageCon.slelectedLanguage);

    return (
        <div className='flex justify-center '>
            <form action="" className=' w-1/2 grid bg-black grid-cols-12'>
                <input className='p-4 m-4 col-span-9 text-amber-50' type="text" placeholder={lang[currentLanguage.appLanguageCon.slelectedLanguage].searchPlaceHolder} />
                <button className='col-span-3 m-4 py-4 px-4 bg-red-700 text-amber-50 rounded-lg'>{lang[currentLanguage.appLanguageCon.slelectedLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar