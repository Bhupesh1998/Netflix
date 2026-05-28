import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { PopularMovies } from "../utils/moviesSlice";
import { PopularMoviesURl, options } from "../constants";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMoview = async () => {
        const data = await fetch(PopularMoviesURl,options);
        const json = await data.json();
        console.log("@@@@popular",json);
        
        dispatch(PopularMovies(json.results))
    }

    useEffect(()=>{        
        getNowPlayingMoview();
    },[])
}

export default usePopularMovies;