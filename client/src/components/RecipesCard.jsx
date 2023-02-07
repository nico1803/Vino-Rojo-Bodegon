import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAbleFood} from "../redux/actions";
import Loading from "./Loading";

export default function Recipescard() {
    const dispatch = useDispatch();
    const recetas = useSelector((state) => state.allFoods)

    const [menu, setMenu] = useState();

    useEffect(()=>{
        dispatch(getAbleFood())
    }, [dispatch]);

    useEffect(()=>{
        setMenu([...recetas])
    },[recetas])

    let [visible, setVisible] = useState(12);
    const showMoreFoods = () => {
        setVisible(prevValue => prevValue + 12);
    }

    if (!recetas.length) return (
        <Loading/>
    )
    return(
        <div className="bg-slate-900 p-3 m-5 rounded-lg">

            <div className="p-5 ">
                <SearchBar/>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-[1280px] grid-flow-row auto-rows-max overflow-auto scroll-smooth">
                {menu?.slice(0, visible).map((el, i) => {return (<Card food={el} key={i} />)})}
            </div>
                
            <div className="flex justify-center mt-3">
                <button className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full" onClick={showMoreFoods}>Mostrar más resultados</button>
            </div>
                
        </div>
    )
}