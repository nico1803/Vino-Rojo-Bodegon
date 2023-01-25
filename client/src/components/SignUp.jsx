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
import logoImg from "../assets/LogoBarril.png";

function SignUp() {

  const dispatch = useDispatch();
  const expcorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
  const  expcontraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  const expusuario = /^[a-zA-Z]{3,15}$/
  
  const history = useNavigate();

//state para guardar el input del email y el password, y si hay mas input se añade a este objeto
const [formData, setFormData]=useState({
  name:"",
  email:"",
  password:"",
  repeatpassword:"",
});

const handlerChange = (e)=>{
  e.preventDefault();
  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })
  console.log(formData)
}




//hacer nueva lidacion segun como se requieran los datos, dependiento de la forma de recibimieto de la db
 async function handlesubmit(e) {
  e.preventDefault();

   try {
        //envia la info de los inputs convertida a un json (formData)
        const data = JSON.stringify(formData);
        console.log(data)
        //envio un fecth a la url del servidor que va a la ruta del post de customers con un objeto de configuracion donde le paso el metodo de la request, el body que contiene la data en formato json y un header para especificar que es un json el que estoy  enviando
         await fetch("http://localhost:3001/login", {
          method: "POST",
          body: data,
          headers: { "Content-Type": "application/json" }
        });
        
        } catch (err) {
        console.error(err);
        }
    

      
  
  
  if(!expusuario.test(formData.name)){return swal("UPS!", "Tu usuario debe contener más de 3 caracteres o no pasarte de los 15", "warning")}
  if(!formData.email){return swal("UPS!", "¡Antes escribe tu email!", "warning")}
  if(!expcorreo.test(formData.email)){return swal ("UPS!", "Esto no parece un email.","warning" )}
  if(!formData.password){return swal("UPS", "Antes escribe tu contraseña!", "warning")}
  if(!expcontraseña.test(formData.password)){return swal ("UPS!", "Contraseña con al menos 8 caracteres, con al menos una letra minúscula, una mayúscula, un dígito y un caracter especial", "warning")}

if(formData.password !== formData.repeatpassword){return swal("UPS!", "La contraseña no coincide", "error")}
    if(formData.name && formData.email && formData.password === formData.repeatpassword ) {
      return swal("¡ESTUPENDO!", "Ahora inicia sesión!", "success") 
      };

     

};





  return (
    <div className="cuerpito">
      <div class="wrapper">
        <div class="container">
          <div class="col-left">
            <div class="login-text">
              <h2>¡Gracias por confiar en nosotros!</h2>
              <p>
                Create your account.
                <br />
                It's totally free.
              </p>
             
            </div>
          </div>
          <div class="col-right">
            <div class="login-form">
              <h2>Login</h2>

              <div>
                <form onSubmit={(e)=>handlesubmit(e)}>
                  <p>
                    <label>
                      Usuario<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Usuario"
                      required
                      value={formData.name}
                      name="name"
                      onChange={handlerChange}
                    />
                  </p>
                  <p>
                    <label>
                    Dirección de Correo<span>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={formData.email}
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
                    <label>
                      Repeat Password<span>*</span>
                    </label>
                    <input type="password"
                     placeholder="Repite tu contraseña" 
                     value={formData.repeatpassword}
                     required
                     name="repeatpassword"
                     onChange={handlerChange}
                     />
                  </p>
                  <p>
                    <input type="submit" id="submit" value="Crear" /* onClick={(e) => handlesubmit(e)} */ />
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
export default SignUp;
