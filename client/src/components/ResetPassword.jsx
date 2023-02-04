import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/forgetpassword.css";
import swal from "sweetalert";
const ResetPassword = () => {
  const history = useNavigate();

  //state del input para la new password
  const [password, setPassword] = useState("");

  //state de errores
  const [error, setError] = useState({});
  //validacion del formato de password
  const expcontraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  //enviar en la url por params el nuevo token
  const { resetToken } = useParams();
  console.log(resetToken);

  //handlers:
  const handlerChange = (e) => {
    e.preventDefault();
    console.log("funciona");
    setPassword(e.target.value);
    setError(validation(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //enviar la nueva contraseña al servidor y actualizar en la cuenta del usuario
    try {
      const api = await axios.post(
        `http://localhost:3001/login/resetpassword/${resetToken}`,
        { password }
      );

      const response = api.data;
      console.log(response.message);
      swal("¡SIUUUUUUU!", "tu contraseña ha sido cambiada existosamente.", "success") &&
      history("/login");
    } catch (error) {
      console.log(error.response);
    }
  };

  //funcion validadora de errores
  const validation = (password) => {
    let errors = {};
    if (!password) {
      errors.password = "La contraseña es requerida.";
    } else if (!expcontraseña.test(password)) {
      errors.password =
        "Tu contraseña debe tener al menos 8 caracteres, con al menos una letra minúscula, una mayúscula, un dígito y un caracter especial.";
    }
    return errors;
  };

  return (
    <div className="cuerpito1">
      <div className="wrapper1">
        <div className="container1">
          <div className="col-right1">
            <div className="login-form1">
              <h2>Cambio de contraseña.</h2>
              <p>
                Por favor, asegurate de seleccionar una contraseña que recuerdes.
              </p>
              <br />
              <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <p>
                    <label>
                      Nueva contraseña<span>*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      placeholder="Contraseña"
                      required
                      name="email"
                      onChange={(e) => handlerChange(e)}
                    />
                    {error.password && (
                      <p className="errors1">{error.password}</p>
                    )}
                  </p>
                  <p>
                    <button type="submit" disabled={error.email}>
                      {" "}
                      Cambiar{" "}
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
};
{
  /* <input type="password" value={password} onChange={(e) => handlerChange(e)} />
{ error.password && <p>{error.password}</p>} */
}
export default ResetPassword;
