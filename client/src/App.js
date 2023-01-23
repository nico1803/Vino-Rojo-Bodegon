import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"
import Navbar from './components/Navbar';



function App() {
  return (<>
    <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
  </>);
}
 

export default App;
