
const {Router} = require("express")
const nodemailer = require("nodemailer")
const router = Router();
router.post("/", (req, res )=> {
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
            subject:"Hola! Tenemos buenas noticias para ti!", 
        html:'<h1>¡Tu cuenta fue creada con exito!</h1> <img src="https://img.freepik.com/vector-gratis/casa-dos-pisos_1308-16176.jpg"/>'


        
        
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