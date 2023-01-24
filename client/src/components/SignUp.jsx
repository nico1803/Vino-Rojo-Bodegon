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

  const clientID =
    "773413580776-bs3kqrn62tfkdmjhek5d5d0gdt3c2cke.apps.googleusercontent.com";

  const history = useNavigate();
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    dispatch(getUser(response.profileObj));
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
    if (user.email === undefined) {
      return swal(
        "UUPS!",
        "Antes debes acceder con Google o con tu cuenta Vino Rojo Bodegón, lo siento.",
        "error"
      );
    } else {
      return (
        swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") && history("/")
      );
    }
  }



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

              <div class={user ? "profile" : "hidden"}>
                <form>
                  <p>
                    <label>
                      Username<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                    />
                  </p>
                  <p>
                    <label>
                    email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                    />
                  </p>
                  <p>
                    <label>
                      Password<span>*</span>
                    </label>
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p>
                    <label>
                      Repeat Password<span>*</span>
                    </label>
                    <input type="password" placeholder=" Repeat Password" required />
                  </p>
                  <p>
                    <input type="submit" id="submit" value="Crear" onClick={(e) => handlesubmit(e)} />
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
