import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../assets/user.png";
/*
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
**/ 


const ProfileUser = ()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[image,setImage]=useState( localStorage.getItem("image") || defaultImage);
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