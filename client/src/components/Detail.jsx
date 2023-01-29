import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../styles/detail.css";
import { FaStar } from "react-icons/fa";
import { postFood, cartAdd } from "../redux/actions";

export default function Detail() {
  let { id } = useParams();
  let [food, setfood] = useState([]);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null)
  const [inputForm, setInputForm] = useState({
    review: '',
  })

  const [error, setError] = useState({})
  // const [hoverStar, setHoverStar] = useState(undefined)
  const dispatch = useDispatch()
  // const allFoods = useSelector((state) => state.allFoods)

  useEffect(() => {

    const food = axios.get(`http://localhost:3001/foods/${id}`)
      .then(function (value) {
        setfood(value.data)
      })
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postFood(setfood))
    alert('Tu comentario se envio correctamente')
  }
  function handleChange(e) {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div className="center">
      <div className="card green">
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
                <button onClick={()=>dispatch(cartAdd(food._id))} className="buttonpay">añadir</button>
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
      <div className="content-star">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + i;

          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={food.review}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={35}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />

            </label>
          );
        })}
      </div>
    </div>
  );
}
