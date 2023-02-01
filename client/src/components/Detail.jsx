import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../styles/detail.css";
import { cartAdd } from "../redux/actions";
import { FaStar } from "react-icons/fa"





export default function Detail() {
  let { id } = useParams();
  let [food, setfood] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {

    const food = axios.get(`http://localhost:3001/foods/${id}`)
      .then(function (value) {
        setfood(value.data)
      })
  }, []);


  return (
    <div>
      <div className="center">
        <div className="card green mb-[1em]">
          <div className="additional">
            <div className="user-card">
              <img className="imgproduct" src={food.image} alt="product image" />
              <div className="points center">${food.price}</div>
            </div>
            <div className="more-info">
              <h1>{food.name}</h1>
              <div className="coords">
                <span>
                  {food.description}
                </span>
              </div>
              <div className="stats">
                <div>
                  <button onClick={() => dispatch(cartAdd(food))} className="buttonpay">añadir</button>
                </div>
              </div>
            </div>
          </div>
          <div className="general">
            <h1>{food.name}</h1>
            <p>
              {food.description}
            </p>
            <span className="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>
      
      <form className="container-star">
        <div className="star-widget">
          <input type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5" ><FaStar /></label>
          <input type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" ><FaStar /></label>
          <input type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" ><FaStar /></label>
          <input type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" ><FaStar /></label>
          <input type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1"><FaStar /></label>

          <header></header>
          <div className="textarea">
            <textarea cols="30" placeholder="Describe que te parecio..."></textarea>
          </div>
          <div className="btn">
            <button type="submit">Enviar</button>
          </div>


        </div>

      </form>

    </div>

  );
}
