import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { cartAdd } from "../redux/actions";
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom";





export default function Detail() {
  let { id } = useParams();
  let [food, setfood] = useState([]);
  const dispatch = useDispatch()

  //Un get aca??? no deberias usar los actions?
  useEffect(() => {
    // eslint-disable-next-line
    const food = axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods/${id}`)
      .then(function (value) {
        setfood(value.data)
      })
      // eslint-disable-next-line
  }, []);


  //const btn = document.querySelector("button")
  const post = document.querySelector(".post")
  const widget = document.querySelector(".star-widget")
  //const editBtn = document.querySelector(".edit")

  //"w-[750px] h-[350px] bg-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] rounded-[30px] relative text-center hover:w-100% flex block"
  return (

    <div className="">

      <div>


      </div>

      {/**Card */}
      <div className="w-100% m-5 flex justify-center">

        <div className="w-[80%] sm:w-[90%] bg-white flex flex-col sm:flex sm:flex-row md:flex md:flex-row rounded-lg drop-shadow-2xl">

          <div className="">
            <img className="rounded-lg sm:w-[450px] sm:h-[100%] lg:w-[500px] lg:h-[350px]" src={food.image} alt="product_image" />
          </div>

          <div className=" m-5 flex flex-col w-[80%]">
            <div className="text-2xl grid justify-items-center underline underline-offset-4 font-bold text-center">
              <h1 className=" animate__animated animate__pulse animate__infinite	infinite  animate__delay-3s">{food.name}</h1>
            </div>

            <div className=" h-[60%] m-5 p-5 flex justify-center ">
              <span className="tracking-wide text-center">
                {food.description}
              </span>
            </div>

            <div className="flex justify-between p-5">
              <div>
                <Link to={"/"}>
                  <button className='text-white bg-[#720f10] hover:bg-[#c51b1e] p-[5px] rounded-lg mr-2'>Seguir Comprando</button>
                </Link>
              </div>

              <div className="flex">
                <div className="bg-[#720f10] rounded-full text-white grid content-center mr-3 px-2">
                  ${food.price}
                </div>

                <div className="">
                  <div>
                    <button onClick={() => {
                      dispatch(cartAdd(food))
                    }} className="text-white bg-[#720f10] hover:bg-[#c51b1e] p-[5px] rounded-lg">Añadir</button>
                  </div>
                </div>
              </div>
            </div>

            

          </div>

        </div>

      </div>
      
      {/* STAR */}
      <div className="hidden animate__animated animate__lightSpeedInLeft  animate__delay-2s">
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

//animate__animated animate__tada animate__infinite	infinite  animate__delay-2s