import React from "react";
import { useState} from "react";
import {useDispatch} from 'react-redux'
import { getFoodsByName } from "../redux/actions";
export default function SearchBar() {

    const dispatch = useDispatch();
    const [input,setInput] = useState('')

    function handleChange(e){
        e.preventDefault();
        setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(input){
            dispatch(getFoodsByName(input));
            setInput('');
        }else{
            alert('Coloca un nombre de comida')
            setInput('')
        }
    }

    return (
        <div className="place-items-center flex justify-start">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <button type="submit" className="rounded-l-lg text-base basis-1  p-0.5 bg-stone-500 hover:bg-stone-700 border-0 w-32">Buscar</button>
                <input type="text" value = {input} onChange={(e)=>{handleChange(e)}} placeholder='Busca una comida...' className="rounded-r-lg p-0.5 bg-stone-200 border-0 caret-red-400 w-[65rem]"/>
            </form>
        </div>
    )
}