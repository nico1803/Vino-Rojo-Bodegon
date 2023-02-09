
const {Router} = require("express")
const nodemailer = require("nodemailer")
const router = Router();

router.post("/", (req, res)=> {
    const {semail} = req.body
    try {
        const transporter =nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }    
      
        })
        const mailoptions = {
            from: process.env.EMAIL,
            to: semail,
            subject:"¡Hola! Tenemos buenas noticias para ti!", 
        html:`<h1>¡Estamos muy felices que estes con nostros!</h1> <p>Deseamos que disfrutes de todos nuestros productos y compartas con tu allegados!</p>`


        
        
        }

        transporter.sendMail(mailoptions,(error, info)=>{
            if(error){
                console.log("Error", error);
            }else{
                console.log("Email send" + info.response);
                res.status(201).json({status:201, info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401,error})
    }
 

}) 

router.post("/reset/:resetToken", (req, res )=> {
    const {resetToken} = req.params
    const {semail} = req.body
    console.log("HOLAAA MMAMA",resetToken);
    console.log("asdasdasd", semail);
    try {
        const transporter =nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS
            }    
      
        })
        const mailoptions = {
            from: process.env.EMAIL,
            to: semail,
            subject:"¡Hola! ¿Fuiste tú?", 
        html:`<h1>Detectamos una petición de cambio de contraseña.</h1>
        <p>Si no fuiste tu, ignora este correo, de lo contrario sigue el paso a paso, saludos!</p>
         <a href="https://vino-rojo-bodegon.vercel.app/resetPassword/${resetToken}"><img src="https://www.ivancepedacastro.com/wp-content/uploads/2020/08/boton-clic-aqui.png"/ height=30px width={50px}></a>`


        
        
        }
        

        transporter.sendMail(mailoptions,(error, info)=>{
            if(error){
                console.log("Error", error);
            }else{
                console.log("Email send" + info.response);
                res.status(201).json({status:201, info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401,error})
    }


})

module.exports = router; 