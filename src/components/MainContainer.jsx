import React from "react";

const MainContainer = ({title, overview}) => {
    console.log("title",title,overview);
    
    return (
        <div>
            <h1 className="text-4xl mx-6 mt-15 font-bold ">{title}</h1>
            <p className="text-md mx-6 mt-2 w-1/4">{overview}</p>

            <div className="mt-10  ">

            <button className="mx-6 py-3.5 px-13 bg-amber-400 rounded-md text-xl font-bold "> ▶️ Play</button>
            <button className="mx-6 py-3.5 px-13 bg-amber-400 rounded-md text-xl font-bold ">More Info</button>
            </div>
        </div>
    )
}

export default MainContainer;