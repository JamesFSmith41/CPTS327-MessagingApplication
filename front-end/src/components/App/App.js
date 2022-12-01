import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import {Box,Typography, TextField,Button} from "@mui/material";
import NavigationBar from '../NavigationBar/NavigationBar';
import Grid from '@mui/material/Grid';
import SignUp from '../Login/SignUp';

function App() {

  

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/preferences" element={<Preferences />}/>
          <Route exact path="/" element={<Login />}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const backStyle={
  background: 'linear-gradient("#1c1e21", "#2596be")'
}
document.body.style = {backStyle};

export default App;