import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductoImage from "../assets/LogoBarril.png";
import "../styles/detail.css";
import Navbar from "./Navbar";


export default function Detail() {
  let {id} = useParams()
  let [food, setfood] = useState([])
  // const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(()=>{
 
  const food = axios.get(`http://localhost:3001/foods/${id}`)
    .then(function(value){
      setfood(value.data)
  })
  }, []);

  return (
      <div class="center">
        <div class="card green">
          <div class="additional">
            <div class="user-card">
              <img className="imgproduct" src={ProductoImage} alt="product image" />
              <div class="points center">{food.price+'$'}</div>
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
      </div>
  );
}
