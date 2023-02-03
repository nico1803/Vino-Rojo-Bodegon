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

  //estado para el input email
  const [email,setEmail]=useState("");
  console.log(email)
  //estado de errores
  const [error, setError] = useState({});
  //envio de correo
  const [semail, setSemail] = useState("")
  console.log("envio de correo confirmación a:", semail);

  //validacion del formato del email
const expcorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/


const handlerChange = (e)=>{
  e.preventDefault();
  console.log("funciona")
  setEmail(e.target.value);
  setError(
    validation(e.target.value)
  );
  setSemail(
    e.target.value = email
)};


async function handleSubmit(e) {
    e.preventDefault();  
    try {
      const api= await axios.post("http://localhost:3001/login/forgetpassword",{email})
      const response= api.data;
      console.log(response.message)
      //enviarle el email al usuario
      history(`/resetPassword/${response.resetToken}`)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }



  ///// VALIDATION /////
  function validation(email) {
    let errors = {};
    if (!email) {
      errors.email = "El email es requerido.";
    } else if (!expcorreo.test(email)) {
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
                      value={email}
                      placeholder="Email"
                      required
                      name="email"
                      onChange={(e)=>handlerChange(e)}
                    />
                    {error.email && <p className="errors1">{error.email}</p>}
                  </p>
                  <p>
                  <button
                      type="submit"
                      disabled={
                        error.email  
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
