import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"


const ResetPassword=({match})=>{

    console.log(match)

    const history= useNavigate();
     
    //state del input para la new password
    const[password, setPassword]= useState("");
    
    //state de errores
    const[error, setError]=useState({});
    //validacion del formato de password
    const expcontraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    //enviar en la url por params el nuevo token 
    const resetToken =useParams({match});
    console.log(resetToken);

    //handlers:
    const handlerChange = (e)=>{
      e.preventDefault();
      console.log("funciona")
      setPassword(e.target.value);
      setError(
        validation(e.target.value)
      );
    };

    const handleSubmit= async(e)=>{
        e.preventDefault();

        //enviar la nueva contraseña al servidor y actualizar en la cuenta del usuario
      try {
        const api= await axios.post(`http://localhost:3001/login/resetpassword/${resetToken}`, {password})

        const response= api.data;
        console.log(response.message)
        history("/login")
      } catch (error) {
        console.log(error.response)
      }
    };

    //funcion validadora de errores
    const  validation = (password) => {
        let errors = {};
    if (!password) {
      errors.password = "La contraseña es requerida.";
    } else if (!expcontraseña.test(password)) {
      errors.password = "Tu contraseña debe tener al menos 8 caracteres, con al menos una letra minúscula, una mayúscula, un dígito y un caracter especial.";;
    }
    return errors;
    }

    
    return (
        <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={(e) => handlerChange(e)} />
        { error.password && <p>{error.password}</p>}
        <button type="submit" disabled={error.password}>Cambiar Password</button>
        </form>
        );
};

export default ResetPassword;