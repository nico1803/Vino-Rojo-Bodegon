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
  
  //envia la info de los inputs convertida a un json (formData)
  //envio un fecth a la url del servidor que va a la ruta del post de customers con un objeto de configuracion donde le paso el metodo de la request, el body que contiene la data en formato json y un header para especificar que es un json el que estoy  enviando
  
  const data = JSON.stringify(formData);
  console.log(data);
  //envio un fecth a la url del servidor que va a la ruta del post de customers con un objeto de configuracion donde le paso el metodo de la request, el body que contiene la data en formato json y un header para especificar que es un json el que estoy  enviando
  const validate1 = await fetch("http://localhost:3001/login/Signin", {
    method: "POST",
    body: data,
    headers: { "Content-Type": "application/json" },
  });
  const at = validate1.json();
  console.log("soy el status", at);
  if(at.status === 400){
    return swal({
      icon: 'error',
      title: 'Oops...',
      text: 'Parece que este correo no esta en uso!',
      footer: '<a href="/signup">¿Quieres crear una cuenta?</a>'
    })
  }else if(at.status !== 400){
    const {data: {ok, token}} = validate1
    if(ok){
      console.log("token -->", token)
      localStorage.setItem('token', token)
    }
    }
    
 swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")
    
  }

//   const {data: {ok, token}} = await axios.post("http://localhost:3001/login/signin", formData);
//   if (ok) {




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
