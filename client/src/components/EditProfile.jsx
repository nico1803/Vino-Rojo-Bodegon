import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../assets/user.png";
import {  useState } from "react";
import axios from "axios"
import "../styles/editprofile.css";

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


const EditProfile = ()=>{
  
  const history=useNavigate();


  const id = localStorage.getItem("userId");



       //estados para la informacion del usuario
      const[name, setName]= useState("");
      const [image, setImage] = useState( "" || defaultImage);


  // //Handler para el el nombre
  const handlerChange=(e)=>{
      setName(e.target.value)
   };
   console.log(name);

  //  //Handler para la imagen
   const handleChangeImage = e => {
       imageParser(e,setImage)
     };
     console.log(image);

  // //Handler para el submit
     const handlerSubmit = async (e)=>{
     e.preventDefault();
     console.log("pasa algo")
     const data = {name, image};
     console.log( "prueba", name,image)
     try {
      const apiServer = await axios.post(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}login/update/${id}`,data);
      console.log(data)
      const server= apiServer.data;
      console.log( "server",server)

        localStorage.setItem("name", server.name)
        localStorage.setItem("image", server.image)
       

     history("/profile")
   } catch (error) {
      console.log(error.response)
   }


     }



     return(
      
      <figure class="snip1336">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <figcaption>
    <img src={image} alt="profile-sample4" class="profile" />
    <form onSubmit={handlerSubmit} >
    <div class="button-wrapper">
  <span class="label">
    Cambia tu foto
  </span>
  
    <input type="file" accept="image/*" name="upload" id="upload" class="upload-box"  onChange={handleChangeImage}/>
  
</div>
    {/* <label > Cambia tu foto.
              <input type="file"  accept="image/*" onChange={handleChangeImage}/>
          </label> */}
          <br />
          <br />
          <div class="input-group">
  <input required="" type="text" name="text" autocomplete="off" class="input" onChange={handlerChange} value={name}/>
  <label class="user-label">Nuevo nombre de usuario.</label>
</div>
    

         <br />
         <br />
         <a><button type="submit" class="follow">Guardar cambios</button></a>
           
  
        </form>
            
        <Link to={"/profile"}><button>Cancelar Cambios</button></Link> 

  </figcaption>
</figure>

 


      
      // <div>
      //     <h3>Editar perfil</h3>
      
  
      // </div>
     )
  };

export default EditProfile;











// const history = useNavigate();
//   const id = localStorage.getItem("userId");
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState(localStorage.getItem("image") || defaultImage);
//   const [error, setError] = useState(null);

//   const handleChangeName = (e) => {
//     setName(e.target.value)
//   };

//   const handleChangeImage = async (e) => {
//     const file = e.target.files[0];
//     try {
//       const formData = new FormData();
//       formData.append("image", file);
//       const response = await axios.post("https://api.cloudinary.com/v1_1/dekukjia0/image/upload", formData);
//       const imageUrl = response.data.secure_url;
//       setImageUrl(imageUrl);
//       localStorage.setItem("image", imageUrl);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = { name, imageUrl };
//       const response = await axios.post(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}login/update/${id}`, data);
//       const user = response.data;
//       localStorage.setItem("name", user.name);
//       history("/profile");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h3>Editar perfil</h3>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit} >
//         <label> Nombre
//           <input type="text" onChange={handleChangeName} value={name} />
//         </label>
//         <img src={imageUrl} alt="" height={"100px"} width={"100px"} />
//         <label> Editar la foto
//           <input type="file" onChange={handleChangeImage} />
//         </label>
//         <br />
//         <br />
//         <button type="submit">Ver Perfil</button>
//       </form>
//       <Link to={"/profile"}> <button>Cancelar Cambios</button> </Link>
//     </div>
//   )




















//

//