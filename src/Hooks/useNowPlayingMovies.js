import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { url, options } from "../constants";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMoview = async () => {
        const data = await fetch(url,options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{        
        getNowPlayingMoview();
    },[])
}

export default useNowPlayingMovies;