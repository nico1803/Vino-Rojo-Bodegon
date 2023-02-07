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
import Forgetpassword from './components/ForgetPassword';
import Aboutus from './components/Aboutus';
import Admin from './components/admin/Admin';
import ResetPassword from './components/ResetPassword';
import ProfileUser from './components/ProfileUser';
import EditProfile from './components/EditProfile';

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

        <Route exact path={"/resetPassword/:resetToken"} element={<ResetPassword/>}/>  

        <Route path='/aboutus' element={<Aboutus/>}/>

        <Route path='/admin' element={<Admin/>}/>

        <Route path='/profile/' element={<ProfileUser/>}/>

        <Route path='/editprofile' element={<EditProfile/>}/>


      </Routes>
    <Footer/>
  </>);
}
 


export default App;
