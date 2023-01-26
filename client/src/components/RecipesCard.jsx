import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../redux/actions";

export default function Recipescard() {
    const dispatch = useDispatch();
    const recetas = useSelector((state) => state.allFoods)
    useEffect(()=>{
        dispatch(getFoods())
    }, [dispatch]);


    const [allFoods2, setAllFoods2] = useState([]);


    let [visible, setVisible] = useState(12);
    const showMoreFoods = () => {
        setVisible(prevValue => prevValue + 12);
    }

    

    if ( !recetas.length ) return (
        <div>
            <h4>LOL</h4>
        </div>
    )

    return(
        <div >
            <div className="bg-slate-900 p-3 m-5 rounded-lg w-2/3 max-w-2/3 float-right">

                <div className="p-5 ">
                    <SearchBar/>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-[960px] overflow-auto scroll-smooth">
                    {recetas?.slice(0, visible).map((el, i) => {return (<Card food={el} key={i} />)})}
                </div>
                <div className="flex justify-center mt-3">
                    <button className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full" onClick={showMoreFoods}>Mostrar más resultados</button>
                </div>
                
            </div>
        </div>
    )
}//