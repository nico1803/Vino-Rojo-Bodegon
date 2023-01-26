const {Router} = require("express")
const nodemailer = require("nodemailer")
const router = Router();

router.post("/email", (req, res )=> {
    const {email} = req.body
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
            to: email,
            subject:"Hola! Tenemos buenas noticias", 
        html:"<h1> ¡TU CUENTA FUE CREADA EXITOSAMENTE! </h1>"
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