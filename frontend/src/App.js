
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} ></Route>
      <Route path='/signup' element={<Signup />} ></Route>
      <Route path='/home' element={<Home />} ></Route>
    </Routes>
     
    </BrowserRouter>
  
  );
}

export default App;
