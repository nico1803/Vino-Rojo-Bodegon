import "../styles/login.css";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { getUser } from "../redux/actions.js";
import axios from "axios";

function Login() {
  //const dispatch = useDispatch();

 
  const history = useNavigate();
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);
  //state para guardar el input del email y el password, y si hay mas input se añade a este objeto
  const [error, setError] = useState({});
const [formData, setFormData]=useState({
  email:"",
  password:""
});
const expRegular = /^[a-zA-Z]{2,15}$/;
const expcorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

  // const onSuccess = (response) => {
  //   setUser(response.profileObj);

  //   dispatch(getUser(response.profileObj));

  //   dispatch(getUser(response.profileObj))
    
  //   console.log(response)

  //   document.getElementsByClassName("btn").hidden = true;
  // };
  // const onFailure = (response) => {
  //   console.log("Something went wrong");
  // };
  // const handleLogout = () => {
  //   setUser({});
  // };

  // function handlesubmit(e) {
  //   e.preventDefault();
  //   if(!formData.email){return swal("UPS!", "¡Antes escribe tu email!", "warning")}
  //   if(!expcorreo.test(formData.email)){return swal ("UPS!", "Esto no parece un email.","warning" )}
  //   if(!formData.password){return swal("UPS", "Antes escribe tu contraseña!", "warning")}
  //     if(formData.email && formData.password ) {
  //       return swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")
  //       } 


  // }


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
}




async function handleSubmit(e) {
    e.preventDefault();  

    try {
      const {data: {ok, token, message, status}} = await axios.post("http://localhost:3001/login/signin",formData)
      if(status === 400){
        swal({
          title: "Oppps...",
          text: "Algo salio mal, verifica tus datos.",
          icon: "error",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Asegurate que tus datos sean correctos.", {
              icon: "warning", 
            });
          } else {
            swal({
              title:"Ummm...",
              text:"No puedes ingresar si no tienes cuenta.",
              icon:"error",
            });
          }
        });
      } else if(ok && status !==400){
        
        //guardar token en local storage
        console.log("token -->", token)
        localStorage.setItem('token', token)
        //incluir el token usando axios
        
        const axiosToken = axios.defaults.headers.common["authorization"] = localStorage.getItem("token", token);
        console.log(axiosToken);
        console.log( axios.defaults.headers.common)
        swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")
      }



    
    } catch (error) {
      console.log(error.response.data.message)
    }
    
 
    
  }






  ///// VALIDATION /////
  function validation(formData) {
    let errors = {};
    if (!formData.email) {
      errors.email = "El email es requerido.";
    } else if (!expcorreo.test(formData.email)) {
      errors.email = "Esto no parece un email.";
    }

    if (!formData.password) {
      errors.password = "La contraseña es requerida.";
    } 
    return errors;
  }
/// CUERPO HTML ////////
  return (
    <div className="cuerpito">
      <div className="wrapper">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Bienvenido!</h2>
              <p>
                Crea una cuenta,
                <br />
                es totalmente gratis!.
              </p>
              <a className="btn" href="/signup">
                ¡registrarte!
              </a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Inicio de Sesión.</h2>

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
                    {error.email && <p className="errors">{error.email}</p>}
                  </p>
                  <p>
                    <label>
                      Contraseña<span>*</span>
                    </label>
                    <input type="password"
                     placeholder="Contraseña"
                     value={formData.password}
                      required 
                      name="password"
                      onChange={handlerChange}/>
                      {error.password && (
                      <p className="errors">{error.password}</p>
                    )}
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
                      Crear{" "}
                    </button>
                  </p>
                  <p>
                    <a href="https://www.youtube.com/watch?v=pF-3S-HTJSg" target="_blank">Forget Password?</a>
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
export default Login;
