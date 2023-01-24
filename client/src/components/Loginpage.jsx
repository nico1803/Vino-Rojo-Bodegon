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

function Login() {
  const dispatch = useDispatch();

  const clientID =
    "773413580776-bs3kqrn62tfkdmjhek5d5d0gdt3c2cke.apps.googleusercontent.com";

  const history = useNavigate();
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

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
              <h2>Welcome Back</h2>
              <p>
                Create your account.
                <br />
                It's totally free.
              </p>
              <a class="btn" href="/signup">
                Sign Up
              </a>
            </div>
          </div>
          <div class="col-right">
            <div class="login-form">
              <h2>Login</h2>

              <div class={user ? "profile" : "hidden"}>
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
                <div className="middel"><strong> or login with</strong> </div>
                <form>
                  <p>
                    <label>
                      Username or email address<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Username or Email"
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
                    <input type="submit" id="submit" value="Ingresar" onClick={(e) => handlesubmit(e)} />
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
