import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Recipescard() {
    let [food, setfood] = useState([]);
    let [visible, setVisible] = useState(12);

    const showMoreFoods = () => {
        setVisible(prevValue => prevValue + 12);
    }

    

    useEffect(()=>{
        const food2 = axios.get('http://localhost:3001/foods')
          .then(function(value){
            setfood(value.data)
        })}, []);

    return (
        <div >
            <div class="bg-slate-900 p-3 m-5 rounded-lg w-2/3 max-w-2/3 float-right">

                <div class="p-5 ">
                    <SearchBar/>
                </div>

                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 h-[960px] overflow-auto scroll-smooth">
                    {food.slice(0, visible).map((el) => {return (<Card food={el}/>)})}
                </div>
                <div className="flex justify-center mt-3">
                    <button className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full" onClick={showMoreFoods}>Mostrar más resultados</button>
                </div>
                
                
            </div>
        </div>
    )
}