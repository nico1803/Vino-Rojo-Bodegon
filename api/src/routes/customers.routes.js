const jwt = require('jsonwebtoken');
const { Router } = require('express');
const {
  createCustomer,
  getCustomers,
  emailValidation,
  deleteCustomer,
  updateCustomer,
  findCustomerByEmail,
  updateCart,
  findUserById,
} = require('../controllers/index');
const bcryp = require('bcryptjs');
const { generatorToken, verifyToken } = require('../auth/auth');



const router = Router();


//Middleware
const tokenValidation = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(400)
      .send('You must provide a token on Authorization header');
  }
  const { id, email } = jwt.verify(
    req.headers.authorization,
    process.env.SECRET_KEY
  );
  const emailIsAuthenticated = email === req.params.email;
  console.log(emailIsAuthenticated)
  if (emailIsAuthenticated) return next();
  return res.status(401).send({
    ok: false,
    message: 'You are not authorized to access this information.',
  });
};



//creacion o registro de customers
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const findCustomer = await findCustomerByEmail(email);
    if (!findCustomer) {
      await createCustomer(name, email, password);
      res.status(200).json({ status: 200, smg: 'Usuario creado' });
    } else {
      res.status(400).json({ status: 400, smg: 'Este correo ya existe' });
    }
  } catch (error) {
    res.status(200).json({ status: 400, error });
  }
});

//Login o inicio de sesion
router.post('/signin', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findCustomerByEmail(email); 
    console.log(user);
    //si existe el usuario verifica la contraseña
    if (user) {
      const comparePassword = await bcryp.compare(
        req.body.password,
        user.password
      );
      //si la contraseña es correcta genera el token
      if (comparePassword) {
        const token = generatorToken({ id: user._id, email: user.email, admin: user.admin});
        console.log(token);
        res.send({status: 200, ok: true, message: 'Welcome our app!', token: token, user });
      } else {
        res.send({status: 400, ok:false, message:'password incorrect'});
      }
    } else {
      res.status(400).send({status: 400, ok:false, message:'email incorrect or not exist'});
    }
  } catch (error) {
    console.log(error);
  }
});

//trae todos los customers
router.get('/customers', async (req, res) => {
  try {
    const customers = await getCustomers();
    console.log(customers);
    res.send(customers);
  } catch (error) {
    res.send(error);
  }
});

// router.get('/:email', async (req, res) => {
//   const { email } = req.params;
//   try {
//     let validate = await emailValidation(email);
//     if (validate == true) {
//       return res.status(400).send('Este email ya está en uso');
//     } else if (validate == false) {
//       return res.send('El mail se puede utilizar');
//     }
//   } catch (error) {
//     res.send(error);
//   }
// });
/////// ------>

// router.post('/email', async (req, res) => {
//   const { email } = req.body;
//   try {
//     let validate = await emailValidation(email);
//     if (validate == true) {
//       return res.status(400).send('Este email ya está en uso');
//     } else if (validate ==  false) {
//       return res.send('El mail se puede utilizar');
//     }
//   } catch (error) {
//     res.send(error);
//   }
// });
// router.post('/username', async (req, res) => {
//   const { username } = req.body;
//   try {
//     let validate = await userValidation(username);
//     if (validate == true) {
//       return res.status(400).send('Este usuario ya está en uso');
//     } else if (validate ==  false) {
//       return res.send('El usuario se puede utilizar');
//     }
//   } catch (error) {
//     res.send(error);
//   }
// });

router.delete('/:id', async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    if(decoded.user.admin === false){
      return res.status(400)
    }
    await deleteCustomer(id);
    res.status(200).send('El usuario fue eliminado');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put('/:id', verifyToken, async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    if(decoded.user.admin === false){
      return res.status(400)
    }
    await updateCustomer(id, name, password, email);
    res.status(200).send('La constraseña fue actualizada');
  } catch (error) {
    res.send(error);
  }
});


router.get('/sensibleInformation/:email', verifyToken, (req, res) => {
  return res.send({
    user: req.params.email,
    debit_card_number: '1244 1234 1234 1234',
  });
});

// RUTAS PARA EL CART 
router.put('/updateCart/:id', async (req, res) => {
  const {id} = req.params;
  const {cart, numberCart} = req.body; // --- id: customer._id, cart: [{id, name, image, price}]
  try {
    await updateCart(id, cart, numberCart);
    return res.status(200).send('El carrito fue actualizado')
  } catch (error) {
    res.send(error)
  }
})

router.get('/verifyAdmin', verifyToken, async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if(decoded.user.admin === true) {
    return res.send('Este user es admin')
  }
  return res.status(400).send('No tienes los permisos necesarios')
});

router.get('/verifyAdmin/:token', verifyToken, async (req, res) => {
  const {token} = req.params;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  if(decoded.user.admin === true) {
    return res.send('Este user es admin')
  }
  return res.status(400).send('No tienes los permisos necesarios')
});
//rutas para cambiar la contraseña

//verifica si existe el correo, si existe le genera un nuevo token
router.post("/forgetpassword", async(req,res)=>{
  const{email}=req.body;
   try {
    const user = await findCustomerByEmail(email)
    if (!user) {
      return res
        .status(400)
        .json({ message: 'No existe un usuario con ese correo electrónico' });
    }
    //genera un nuevo token
    const resetToken = jwt.sign({ id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m'});
    console.log(resetToken)
    //hacemos el proceso de enviar el email
    //const resetLink = `http://localhost:3000/resetpassword/${resetToken}`;
    // console.log(resetLink)
    return res.status(200).json({ message: 'Usuario encontrado', resetToken });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'No se pudo restablecer la contraseña' });
  }
});

//recibe la nueva contraseña y la hashea

router.post('/resetpassword/:resetToken', async (req, res) => {
  try {
    const { resetToken } = req.params;
    console.log(resetToken);
    const { password } = req.body;
    console.log(password);
    // verifica el token nuevo
    const decoded = jwt.verify(resetToken, process.env.RESET_PASSWORD_KEY);
    console.log(decoded);
    // buscar el user por el id desde el token nuevo
    const user = await findUserById(decoded.id);
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ message: 'No existe un usuario con ese ID' });
    }
    // hashea la nueva contraseña
    const salt = await bcryp.genSalt(10);
    const hashedPassword = await bcryp.hash(password, salt);
    // actualiza la contraseña del user
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({
      ok: true,
      message: 'Su contraseña ha sido restablecida con éxito',
    });
  } catch (error) {
    return res.json({
      ok: false,
      message: 'No se ha reestablecido su contraseña',
    });
  }
});



module.exports = router;
