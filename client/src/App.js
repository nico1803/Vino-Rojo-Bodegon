import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
    </Routes>
  );
}

export default App;
