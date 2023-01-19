import React from "react";
import { useState} from "react";

export default function SearchBar() {

    const [input, setInput] = useState("");

    let handleClick = (event) => {

    }

    return (
        <div>

            <div>
                <button type="submit" onClick={event => handleClick(event)} >Buscar</button>
                <input type="search" placeholder="Buscar plato" value={input} onChange={null}> </input>
            </div>

        </div>
    )
}