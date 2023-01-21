import "../styles/login.css";
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import LogGoogle from "../assets/google.png";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';


 function Login() {
  const clientID =
    "773413580776-bs3kqrn62tfkdmjhek5d5d0gdt3c2cke.apps.googleusercontent.com";

  const history = useHistory();
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

  const onSuccess = (response) => {
    setUser(response.profileObj);
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
        "Antes debes acceder con Google, lo siento.",
        "error"
      );
    } else {
      return swal("¡GENIAL!", "Disfruta  nuetra pagina!", "success") &&
      history.push("/home");
    }
  }



  return (
    <div className="cardlogin">
      <div class="cardg-img">
        <img src={LogGoogle} />
      </div>
      <div class="cardg-info">
        <p class="text-body">
          Por tu comodidad y seguridad, ¡accede a través de Google!
        </p>
      </div><div>
      </div>
      <div class={user ? "profile" : "hidden"}>
        <img className="profile-image" src={user.imageUrl} />
        <h3>{user.name}</h3>
        <div>
        {user.email===undefined
          ?       <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />
          :       <GoogleLogout 
          clientId={clientID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
        >
        </GoogleLogout>
        }
      </div>
      </div>
      <button className="buttonl" onClick={(e) => handlesubmit(e)}>
        Acceder
      </button>

    </div>
  );
}
export default Login;