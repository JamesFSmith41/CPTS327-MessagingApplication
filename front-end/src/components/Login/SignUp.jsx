import './SignUp.css'
import {Box,Typography, TextField,Button, StepButton} from "@mui/material";
import { useNavigate} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import * as React from 'react';
import Grid from '@mui/material/Grid';

 const SignUp = () =>
 {
    const navigate = useNavigate();

    const navigateDashboard = () =>
    {
        navigate("/dashboard");
    }

    const navigateLogin = () =>
    {
        navigate("/");
    }

        return(
            <div className="login-wrapper">
                <Box className="loginBox">
                    <Grid container className='loginGridContainer'
                    flexDirection="column">
                        <Grid item>
                            <Box className="loginText"
                                variant="contained">
                                   Sign Up
                            </Box>
                        </Grid>
                        <Grid item>
                            <TextField className='emailTextField'
                            sx={{mb: 5}}
                                type="email"
                                //onChange={e => setPassword(e.target.value)}            
                                id="outlined-basic"
                                label="Email"
                                >
                            </TextField>
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
                             Create Account   
                            </button>
                        </Grid>
                        <Grid item>
                            <button className="backButton"
                                onClick={() => navigateLogin()}
                                type="submit"
                                variant="contained"
                            >
                             Go Back
                            </button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
 }   
export default SignUp; 
