import React from 'react';

const Header = () => {
    return(

      <header className=' text-amber-50 flex justify-between px-36 py-4.5 z-50 absolute top-0 left-0 w-full items-center'>
        <div className='bg-linear-to-b from-black w-1/7'>
          <img className=' ' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        </div>
        <div className='flex gap-5 '>
        <select className="border border-white bg-black text-white rounded-md p-2">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select> 
          <button className=' cursor-pointer border-2-red bg-red-900 rounded-md py-1 px-3 mr-3 font-medium'> Sign In</button>
        </div>
      </header>
    )
}

export default Header;