import "../styles/forgetpassword.css";
import { useState } from "react";
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
  //estado de errores
  const [error, setError] = useState({});
  //envio de correo
  const [semail,setSemail]=useState("");
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
    e.target.value
)};


async function handleSubmit(e) {
    e.preventDefault();  
    try {
      const {data: {resetToken, message}} = await axios.post("http://localhost:3001/login/forgetpassword",{email})
      console.log("soy el mensaje:", message)
   console.log("soy el token:", resetToken)
      if(message === "Usuario encontrado"){
        const sendemail = await axios.post(`http://localhost:3001/email/reset/${resetToken}`, {semail})
       console.log("asadasdasda", sendemail)
        const datavalidate = await sendemail.data; 
        console.log("holasoy yo:", datavalidate)

      console.log(datavalidate.status);
      if(datavalidate.status === 401 || !datavalidate ){
        console.log("error");
      }else{
        console.log("email send!");
      }
      }
      swal("¡LISTO!", "Te hemos enviado un correo para restablecer tu contraseña, recuerda que tienes 20 mins para realizar este cambio.", "success") &&
      history("/login")

      
    } catch (error) {
      swal({
        title: "Oppps...",
        text: "Parece que este correo no existe, crea una cuenta.",
        icon: "error",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Sigue el paso a paso.", {
            icon: "warning", 
          });
          history("/signup")
        } else {
          swal({
            title:"Ummm...",
            text:"No podemos hacer cambio de contraseña a una cuenta inexistente.",
            icon:"error",
          });

        }
      });
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
