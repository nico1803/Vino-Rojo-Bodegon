import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Recipescard() {
    let [food, setfood] = useState([])

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

                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4  ">
                    {food.map((el) => {return (<Card food={el}/>)})}
                </div>
                
            </div>
        </div>
    )
}