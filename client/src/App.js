import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"
import Navbar from './components/Navbar';
import SignUp from "./components/SignUp"


function App() {
  return (<>
    <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/signup'element={<SignUp/>}/>
      </Routes>
  </>);
}
 

export default App;
