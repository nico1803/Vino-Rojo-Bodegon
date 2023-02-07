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


  //Un get aca??? no deberias usar los actions?
  useEffect(() => {
    // eslint-disable-next-line
    const food = axios.get(`http://localhost:3001/foods/${id}`)
      .then(function (value) {
        setfood(value.data)
      })
      // eslint-disable-next-line
  }, []);


  //const btn = document.querySelector("button")
  const post = document.querySelector(".post")
  const widget = document.querySelector(".star-widget")
  //const editBtn = document.querySelector(".edit")


  return (

    <div className="">

      {/**Card */}
      <div className="w-100% m-5 bg-[#f006] flex justify-center">
        <div className="w-[750px] h-[350px] bg-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] rounded-[30px] relative text-center hover:w-100% flex block">
          <div className="additional">
            <div className="user-card">
              <img className="imgproduct" src={food.image} alt="product_image" />
              <div className="points center">${food.price}</div>
            </div>
            <div className="more-info">
              <h1 className="animate__animated animate__pulse animate__infinite	infinite  animate__delay-3s">{food.name}</h1>
              <div className="coords">
                <span>
                  {food.description}
                </span>
              </div>
              <div className="stats">
                <div>
                  <button onClick={() => dispatch(cartAdd(food))} className="buttonpay animate__animated animate__tada animate__infinite	infinite  animate__delay-2s">añadir</button>
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
      
      {/* STAR */}
      <div className="animate__animated animate__lightSpeedInLeft  animate__delay-2s">
      <form action="#" className="container-star ">
        <div className="post">
          <div className="text">Gracias por tu calificacion!</div>
          <div className="edit" onClick={() => { widget.style.display = "block"; post.style.display = "none"; return false }}>EDIT</div>
        </div>
        <div className="star-widget">
          <input value={5}  type="radio" name="rate" id="rate-5" />
          <label htmlFor="rate-5" ><FaStar /></label>
          <input value={4} type="radio" name="rate" id="rate-4" />
          <label htmlFor="rate-4" ><FaStar /></label>
          <input value={3} type="radio" name="rate" id="rate-3" />
          <label htmlFor="rate-3" ><FaStar /></label>
          <input value={2} type="radio" name="rate" id="rate-2" />
          <label htmlFor="rate-2" ><FaStar /></label>
          <input value={1} type="radio" name="rate" id="rate-1" />
          <label htmlFor="rate-1"><FaStar /></label>
          <form action="#">
            <header></header>
            <div className="textarea">
              <textarea cols="30" placeholder="Describe que te parecio..."></textarea>
            </div>
            <div className="btn">
              <button type="submit" onClick={() => { widget.style.display = "none"; post.style.display = "block"; return false }}>Enviar</button>
            </div>
          </form>
        </div>

      </form>
      </div>
    </div>

  );
}
