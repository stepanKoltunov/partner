import React from 'react';
import { Header } from './screens/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/screens/Header.scss'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>main</h1>}/>
        <Route path='/about' element={<h1>about</h1>}/>
        <Route path='/connection' element={<h1>connection</h1>}/>
        <Route path='/services' element={<h1>services</h1>}/>
      </Routes>
    </>
  );
}

export default App;