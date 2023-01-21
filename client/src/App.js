import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Login from "./components/Loginpage"



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route path='/home' component={Home}/>
      <Route path='/detail' component={Detail}/>
     
    </Switch>
    </div>
    </BrowserRouter>
  );
}
 

export default App;
