import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-router-dom' 
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import CreateAccount from './components/CreateAccount';
import Shop from './components/Shop';
import View from './components/View';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Aboutus" element={<Aboutus/>}></Route>
      <Route path="/Menu" element={<App/>}></Route>
      <Route path="/Shop" element={<Shop/>}></Route>
      <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
      <Route path="/View" element={<View/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
