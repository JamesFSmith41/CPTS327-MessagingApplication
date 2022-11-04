import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import {Box,Typography, TextField,Button} from "@mui/material";
import NavigationBar from '../NavigationBar/NavigationBar';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="wrapper">
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
document.body.style.backgroundColor = "#00134d";

export default App;