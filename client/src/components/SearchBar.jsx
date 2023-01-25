import React from "react";
import { useState} from "react";

export default function SearchBar() {

    const [inputText, setInputtext] = useState("");

    let handleClick = (event) => {
        event.preventDefault();

    }

    return (
        <div className="place-items-center flex justify-start">
            <div>
                <button type="submit" onClick={event => handleClick(event)} className="rounded-l-lg text-base basis-1  p-0.5 bg-stone-500 hover:bg-stone-700 border-0 w-32">Buscar</button>
                <input type="text" name="Buscar plato" id="" className="rounded-r-lg p-0.5 bg-stone-200 border-0 caret-red-400 w-[65rem]"/>
            </div>
        </div>
    )
}