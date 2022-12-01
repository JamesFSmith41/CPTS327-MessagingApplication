import './Login.css'
import {Box,Typography, TextField,Button, StepButton} from "@mui/material";
import { useNavigate} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

 const Login = () =>
 {


    const navigate = useNavigate();

    const navigateDashboard = () =>
    {
        navigate("/dashboard");
    }

    const navigateSignUp = () =>
    {
        navigate("/signup");
    }
        return(
            <div className="login-wrapper">
                <Box className="loginBox">
                    <Grid container className='loginGridContainer'
                    flexDirection="column">
                        <Grid item>
                            <Box className="loginText"
                                variant="contained">
                                  Login
                            </Box>
                        </Grid>
                        <Grid item>
                            <TextField className='userNameTextField'
                            sx={{mb: 5}}
                                //onChange={e => setPassword(e.target.value)}            
                                id="outlined-basic"
                                label="Username"
                                >
                            </TextField>
                        </Grid>

                        <Grid item>
                            <TextField className='passwordTextField'
                                sx={{ mb: 5}}
                                type="password"
                                //onChange={e => setPassword(e.target.value)}            
                                id="outlined-basic"
                                label="Pasword">
                            </TextField>
                        </Grid>    
                        <Grid item>
                            <button className="loginButton"
                                onClick={() => navigateDashboard()}
                                type="submit"
                                variant="contained"
                            >
                             Login   
                            </button>
                        </Grid>
                        <Grid item>
                            <button className="signupButton"
                                onClick={() => navigateSignUp()}
                                type="submit"
                                variant="contained"
                            >
                             Sign Up   
                            </button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
 }   
export default Login; 
