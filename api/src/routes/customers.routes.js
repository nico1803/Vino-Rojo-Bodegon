const { Router } = require('express');
const { createCustomer, getCustomers, emailValidation, deleteCustomer, updateCustomer, findCustomerByEmail, userValidation} = require('../controllers/index');
const bcryp=require("bcryptjs");
const {generatorToken} = require('../auth/auth');

const router = Router();

//creacion o registro de customers
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const findCustomer = await findCustomerByEmail(email)
    if(!findCustomer){
      await createCustomer(name, email, password);
    res.status(200).send('Usuario creado');
    }else{
      res.status(400).send("Este email ya existe")
    }
   
  } catch (error) {
    res.send(error);
  }
});

//Login o inicio de sesion 
router.post("/signin", async(req,res)=>{
  const{email}=req.body
   try {
    const user = await findCustomerByEmail(email)
    console.log(user)
    //si exite el usuario verifica la contraseña
    if(user){
      const comparePassword = bcryp.compare(req.body.password, user.password);
      //si la contraseña es correcta genera el token
    if(comparePassword){
        const token = generatorToken(user.id);
        console.log(token)
        res.send({ ok: true, message: 'Welcome our app!', token:token });
      } else {
        res.send('password incorrect');
      }
    }else{
      res.status(400).send('email incorrect or not exist');
    }
    
   } catch (error) {
    console.log(error)
   }
});


router.get('/customers', async (req, res) => {
  try {
    const customers = await getCustomers();
    res.send(customers);
  } catch (error) {
    res.send(error);
  }
});

router.get('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    let validate = await emailValidation(email);
    if (validate == true) {
      return res.status(400).send('Este email ya está en uso');
    } else if (validate == false) {
      return res.send('El mail se puede utilizar');
    }
  } catch (error) {
    res.send(error);
  }
});
/////// ------->

router.post('/email', async (req, res) => {
  const { email } = req.body;
  try {
    let validate = await emailValidation(email);
    if (validate == true) {
      return res.status(400).send('Este email ya está en uso');
    } else if (validate ==  false) {
      return res.send('El mail se puede utilizar');
    }
  } catch (error) {
    res.send(error);
  }
});
router.post('/username', async (req, res) => {
  const { username } = req.body;
  try {
    let validate = await userValidation(username);
    if (validate == true) {
      return res.status(400).send('Este usuario ya está en uso');
    } else if (validate ==  false) {
      return res.send('El usuario se puede utilizar');
    }
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCustomer(id);
    res.status(200).send('El usuario fue eliminado');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    await updateCustomer(id, name, password, email);
    res.status(200).send('La constraseña fue actualizada');
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
