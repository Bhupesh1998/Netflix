import React from "react";

const MainContainer = ({ title, overview }) => {

    return (
        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent py-16 px-6">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="text-md mt-2 w-1/2 text-gray-200">{overview}</p>

            <div className="mt-10">
                <button className="mx-0 mr-4 py-3 px-6 bg-white text-black rounded-md text-lg font-bold hover:bg-opacity-80 hover:opacity-40 cursor-pointer">▶️ Play</button>
                <button className="mx-0 py-3 px-6 bg-gray-600 text-white rounded-md text-lg font-bold hover:bg-opacity-80">More Info</button>
            </div>
        </div>
    )
}

export default MainContainer;