import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product'
import axios from 'axios';
import Single from './Single'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/Single' element={<Single/>}>
    </Routes>
  );
}

export default App;
