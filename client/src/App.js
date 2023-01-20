import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/login' element={<Login/>}/>
    
    </Routes>
  );
}
 

export default App;
