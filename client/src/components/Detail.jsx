import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductoImage from "../assets/LogoBarril.png";
import "../styles/detail.css";
import Navbar from "./Navbar";


export default function Detail() {
  let idFood = useParams()
  let [food, setfood] = useState([])
  // const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(()=>{
 
  const food2 = axios.get(`http://localhost:3001/foods/`,{idFood})
    .then(function(value){
      setfood(value.data)
  })
  console.log(idFood)
  console.log(food)
  


  }, []);

  return (
      <div class="center">
        <div class="card green">
          <div class="additional">
            <div class="user-card">
              <img className="imgproduct" src={ProductoImage} alt="product image" />
              <div class="points center">$100</div>
            </div>
            <div class="more-info">
              <h1>Nombre Producto</h1>
              <div class="coords">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a volutpat mauris, at molestie lacus. Nam vestibulum sodales
                  odio ut pulvinar.
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
            <h1>Nombre Producto</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut
              pulvinar.
            </p>
            <span class="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>
  );
}
