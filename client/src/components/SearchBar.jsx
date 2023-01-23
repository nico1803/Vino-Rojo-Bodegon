import React from "react";
import { useState} from "react";

export default function SearchBar() {

    const [input, setInput] = useState("");

    let handleClick = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <div class="flex-row rounded-2xl border-0 bg-stone-900 scroll-p-3">
                <button type="submit" onClick={event => handleClick(event)} class="rounded-l-lg text-base basis-1  p-0.5 bg-stone-500 hover:bg-stone-700 border-0">Buscar</button>
                <input type="text" name="Buscar plato" id="" class="rounded-r-lg p-0.5 bg-stone-200 border-0 caret-red-400"/>
            </div>
        </div>
    )
}


//<form className='Form' onSubmit={(e)=>handleSubmit(e)}>
//<input className='SearchBar' placeholder='Search by breed...' type='text' name='input'onChange={(e)=>{handleChange(e)}}/>    
//</form> 