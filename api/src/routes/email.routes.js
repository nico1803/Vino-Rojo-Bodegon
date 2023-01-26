
const {Router} = require("express")
const nodemailer = require("nodemailer")
const router = Router();
// const imglogo = require("../../../client/src/assets/LOGO.png")
router.post("/", (req, res )=> {
    const {semail} = req.body
    console.log("email enviado");
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
            subject:"Hola! Tenemos buenas noticias.", 
        html:'<h1>Hola! </h1> <img src="https://img.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg"/>'


        
        
        }


        transporter.sendMail(mailoptions,(error, info)=>{
            if(error){
                console.log("Error", error);
            }else{
                console.log("Email sent" + info.response);
                res.status(201).json({status:201, info})
            }
        })
    } catch (error) {
        res.status(201).json({status:401,error})
    }


})

module.exports = router; 