import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editFood } from '../../redux/actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';



export default function CardEdit() {
    let { id } = useParams();
    const history = useNavigate();
    let [food, setfood] = useState({
        name:"",
        price:"",
        description:"",
        image:""
    });
    const [image, setImage] = useState("");

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

      const handleChangeImage = e => {
        imageParser(e,setImage)
      };
    
    useEffect(() => {
        // eslint-disable-next-line
        const food = axios.get(`${(process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : 'https://vino-rojo-bodegon-production.up.railway.app/')}foods/${id}`)
          .then(function (value) {
            setfood(value.data)
          })
          // eslint-disable-next-line
        }, []);
        console.log(food.name);

        const handleChange =(e)=>{
            setfood({...food,[e.target.name]: e.target.value});
            console.log(e.target.image)
           };
         function updatePost() {
             axios.put(`http://localhost:3001/foods/edit/${id}`, {
             name: food.name,
             description:food.description,
             price:food.price,
             image: image

            }).then((response) => {
                history('/')
              setfood(response.data);
           });
          }

  return (
    <div>
        <div className="w-100% m-5 mt-[6em] flex justify-center">
            <div className="w-[80%] sm:w-[90%] bg-white flex flex-col sm:flex sm:flex-row md:flex md:flex-row rounded-lg drop-shadow-2xl">
                <div className="">
                    <img className="rounded-lg sm:w-[450px] sm:h-[100%] lg:w-[500px] lg:h-[350px]"  alt="product_image" src={`${food.image}`}/>
                </div>
                <div className=" m-5 flex flex-col w-[80%]">
                    <div className="text-2xl grid gap-5 justify-items-left font-bold text-center w-[60%]">
                        <input  name='name' onChange={handleChange} placeholder={food.name} />
                         <input name='image' type='file' accept='image/*' class="upload-box" placeholder='Cambiar imagen' onChange={handleChangeImage}/> 
                        <input name='price'  onChange={handleChange}  placeholder={`$${food.price}`}/>
                        <textarea name='description' onChange={handleChange}  className='w-[100%] h-[100%] box-border resize-none border-2' placeholder={food.description} />
                    </div>
                    <div className="flex justify-end p-5">
                        <button  onClick={updatePost} className="text-white bg-[#720f10] hover:bg-[#c51b1e] p-[5px] rounded-lg">MODIFICAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
