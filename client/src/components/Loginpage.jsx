import "../styles/login.css";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import LogGoogle from "../assets/google.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions.js";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();

  const clientID =
    "773413580776-bs3kqrn62tfkdmjhek5d5d0gdt3c2cke.apps.googleusercontent.com";

  const history = useNavigate();
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);
  //state para guardar el input del email y el password, y si hay mas input se añade a este objeto
const [formData, setFormData]=useState({
  email:"",
  password:""
});
// const expRegular = /^[a-zA-Z]{2,15}$/;
const expcorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

  const onSuccess = (response) => {
    setUser(response.profileObj);

    dispatch(getUser(response.profileObj));

    dispatch(getUser(response.profileObj))
    
    console.log(response)

    document.getElementsByClassName("btn").hidden = true;
  };
  const onFailure = (response) => {
    console.log("Something went wrong");
  };
  const handleLogout = () => {
    setUser({});
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });
  function handlesubmit(e) {
    e.preventDefault();
    if(!formData.email){return swal("UPS!", "¡Antes escribe tu email!", "warning")}
    if(!expcorreo.test(formData.email)){return swal ("UPS!", "Esto no parece un email.","warning" )}
    if(!formData.password){return swal("UPS", "Antes escribe tu contraseña!", "warning")}
    if (user.email === undefined && !formData.email && !formData.password ) {
      return swal(
        "UUPS!",
        "Antes debes acceder con Google o con tu cuenta Vino Rojo Bodegón, lo siento.",
        "error"
        );
      } 
      if (user.email !== undefined){return swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")}
      if(formData.email && formData.password ) {
        return swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")
        } 


  }


const handlerChange = (e)=>{
  e.preventDefault();
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
  console.log(formData)
}




const handleSubmit = async e => {
    e.preventDefault();
    console.log('handleSubmit')
try {
  //envia la info de los inputs convertida a un json (formData)
  //envio un fecth a la url del servidor que va a la ruta del post de customers con un objeto de configuracion donde le paso el metodo de la request, el body que contiene la data en formato json y un header para especificar que es un json el que estoy  enviando
  const {data: {ok, token}} = await axios.post("http://localhost:3001/login/signin", formData);
  if (ok) {
    console.log("token -->", token)
    localStorage.setItem('token', token)
  }

} catch (err) {
  console.error(err);
}
  };

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

              <div className={user ? "profile" : "hidden"}>
                <img className="photo" src={user.imageUrl} />
                <div>
                  {user.email === undefined ? <br /> : <h3> <strong>¡Hola! {user.name}.</strong></h3>}
                </div>

                <div>
                  {user.email === undefined ? (
                    <GoogleLogin
                      clientId={clientID}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      isSignedIn={true}
                      buttonText="Continue  with Google"
                      cookiePolicy={"single_host_origin"}
                    />
                  ) : (
                    <GoogleLogout
                      clientId={clientID}
                      buttonText="Logout"
                      onLogoutSuccess={handleLogout}
                    ></GoogleLogout>
                  )}
                </div>
                <div className="middel"><strong>  O Ingresa con: </strong> </div>
                <form onSubmit={handleSubmit}>
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
                  </p>
                  <p>
                    <input type="submit" id="submit" value="Ingresar" />
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
