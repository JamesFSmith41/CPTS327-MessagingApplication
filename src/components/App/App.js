import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken from './useToken';

function App() {

  // const { token, setToken } = useToken();
  
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <h1>Secure Messaging App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/preferences" element={<Preferences />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;