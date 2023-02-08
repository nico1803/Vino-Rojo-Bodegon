import { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import defaultImage from "../assets/user.png";
import axios from "axios";
import "../styles/profile.css";


const imageParser = (event, setState) => {
    if (event.target.files[0]) {
        var file = event.target.files[0];
        if (parseInt(file.size) < 100000) {
            var reader = new FileReader();
            reader.onloadend = function () {                
                setState(reader.result)
            }
            reader.readAsDataURL(file);
  
        }
        else {
            event.target.value = null;
        }
    }
  };



const ProfileUser = ()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[image,setImage]=useState(defaultImage);
    console.log(image)

    
    useEffect(()=>{
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"))
      setImage( localStorage.getItem("image")  !== undefined && localStorage.getItem("image")  !== "undefined" ? localStorage.getItem("image")  : defaultImage );
    },[]);


    return(

<div class="containerProfile">
  <div class="service-details">
    <img src={ image ? image : defaultImage }/>
    <div class="service-hover-text">
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>¡Hola {name}! Estamos muy felices de que estes aqui, esperamos que igual que nosotros, disfrutes los platos.</p>
      
      
    </div>
    <div class="service-white service-text">
      <p>{name}</p>
      <Link to={"/editprofile"}><button>Editar perfil</button></Link>
    </div>
  </div>
</div>




    )

};
export default ProfileUser;