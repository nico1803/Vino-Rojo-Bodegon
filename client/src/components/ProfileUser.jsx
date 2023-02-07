import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import defaultImage from "../assets/user.png";
import axios from "axios";


const ProfileUser = ()=>{


    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[image,setImage]=useState( defaultImage);
    console.log(image)

    
    useEffect(()=>{
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"))
      setImage(localStorage.getItem("image"));
    },[]);

    




    return(
        <div>
            <h2>Perfil del usuario</h2>
            <br />
            <h4>{name}</h4>
            <br />
            <h4>{email}</h4>
            <img src={image } alt="Imagen del perfil" height={"100px"} width={"100px"}/>
            <br />
            <Link to={"/editprofile"}><button >Editar Perfil</button></Link>

        </div>
    )

};
export default ProfileUser;