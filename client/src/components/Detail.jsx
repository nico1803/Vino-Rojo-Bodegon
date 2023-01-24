import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductoImage from "../assets/LogoBarril.png";
import "../styles/detail.css";
import Navbar from "./Navbar";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { postFood } from "../redux/actions";




export default function Detail() {
  let { id } = useParams()
  let [food, setfood] = useState([])
  const [number, setNumber] = useState(0)
  const [inputForm,setInputForm] = useState({
    review: '',
})

  const [error,setError] = useState({})
  // const [hoverStar, setHoverStar] = useState(undefined)
  const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(() => {

    const food = axios.get(`http://localhost:3001/foods/${id}`)
      .then(function (value) {
        setfood(value.data)
      })
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    
        dispatch(postFood(setfood))
        alert('Se ha creado la receta exitosamente')
      
}
function handleChange(e){
  setInputForm({
      ...inputForm,
      [e.target.name] : e.target.value
  })
 
} 

  

  return (

    <div class="center">
      <div class="card green">
          <div class="additional">
            <div class="user-card">
              <img className="imgproduct" src={food.image} alt="product image" />
              <div class="points center">${food.price}</div>
            </div>
            <div class="more-info">
              <h1>{food.name}</h1>
              <div class="coords">
                <span>
                  {food.description}
                </span>
              </div>
              <div class="stats">
                <div>
                  <button className="buttonpay">añadir</button>
                </div>
              </div>
            </div>
          </div>
          <div class="general">
            <h1>{food.name}</h1>
            <p>
            {food.description}
            </p>
            <span class="more">Mouse over the card for more info</span>
          </div>
         </div>
         <form  onSubmit={(e)=>{handleSubmit(e)}} className="popup">
        <div className="content-form">
          <h1>Review</h1>
          {Array(5).fill().map((_, index) => (
            number >= index + 1 ?
              <AiFillStar
                onChange={(e)=>{handleChange(e)}}
              // onMouseOver={()=>setHoverStar(index+1)}
              // onMouseLeave={()=>setHoverStar(undefined)}

               style={{ color: 'orange' }} onClick={()=>setNumber(index + 1)}/>


              : <AiOutlineStar
              // onMouseOver={()=>setHoverStar(index+1)}
              // onMouseLeave={()=>setHoverStar(undefined)}
               style={{ color: 'orange' }} onClick={()=>setNumber(index + 1)} />


          ))}

        </div>
        <textarea placeholder="coment here..."></textarea>
        <button>Submit</button>
      </form>

      
    </div>
  );
}
