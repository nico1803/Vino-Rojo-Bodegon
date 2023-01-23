import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"
import Navbar from './components/Navbar';
import Contact from './components/Contact';



function App() {
  return (<>
    <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
        <Route path='/detail/:id' element={<Detail/>}/>
=======
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/contact' element={<Contact/>}/>
>>>>>>> 4b971cee913dfbe0ed88bbe98e3f281c3108c789
      </Routes>
  </>);
}
 

export default App;
