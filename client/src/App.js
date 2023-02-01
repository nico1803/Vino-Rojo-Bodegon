import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp"
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShoppingCart from './components/Cart-Components/ShoppingCart'
import Forgetpassword from './components/ForgerPassword';
import Aboutus from './components/Aboutus';

function App() {
  return (<>
    <Navbar/>
      <Routes>
        
        <Route exact path='/login' element={<Login/>}/>

        <Route path='/' element={<Home/>}/>

        <Route path='/detail/:id' element={<Detail/>}/>

        <Route path='/detail' element={<Detail/>}/>

        <Route path='/signup'element={<SignUp/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/cart' element={<ShoppingCart/>}/>

        <Route path='/forgetpassword' element={<Forgetpassword/>}/>

        <Route path='/aboutus' element={<Aboutus/>}/>

      </Routes>
    <Footer/>
  </>);
}
 

export default App;
