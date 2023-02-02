import "../styles/forgetpassword.css";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { getUser } from "../redux/actions.js";
import axios from "axios";

function Forgetpassword() {
  //const dispatch = useDispatch();

 
  const history = useNavigate();
  //state para guardar el input del email y el password, y si hay mas input se añade a este objeto
  const [error, setError] = useState({});
  const [semail, setSemail] = useState("")
  console.log("envio de correo confirmación a:", semail);
const [formData, setFormData]=useState({
  email:"",
});
const expcorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

const handlerChange = (e)=>{
  e.preventDefault();
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  });
  setError(
    validation({
      ...formData,
      [e.target.name]: e.target.value,
    })
  );
  setSemail(
    e.target.value = formData.email
)}

async function handleSubmit(e) {
    e.preventDefault();  

  }




  ///// VALIDATION /////
  function validation(formData) {
    let errors = {};
    if (!formData.email) {
      errors.email = "El email es requerido.";
    } else if (!expcorreo.test(formData.email)) {
      errors.email = "Esto no parece un email.";
    }
    return errors;
  }
/// CUERPO HTML ////////
  return (
    <div className="cuerpito1">
      <div className="wrapper1">
        <div className="container1">
          <div className="col-right1">
            <div className="login-form1">
              <h2>Restablecimiento.</h2>
              <p>Por favor, diligencie su correo electronico con el cual se registro en VinoRojo Bodegón, para así, restablecer su contraseña.</p>
              <br />
              <div >
                <form onSubmit={(e) => handleSubmit(e)}>
                  <p>
                    <label>
                      Dirección Email<span>*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      placeholder="Email"
                      required
                      name="email"
                      onChange={handlerChange}
                    />
                    {error.email && <p className="errors1">{error.email}</p>}
                  </p>
                  <p>
                  <button
                      type="submit"
                      disabled={

                        error.email ||
                        error.password 

                      }
                    >
                      {" "}
                      Validar{" "}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgetpassword;
