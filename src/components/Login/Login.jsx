import './Login.css'
import {Box,Typography, TextField,Button} from "@mui/material";
import { useNavigate} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import * as React from 'react';
import Grid from '@mui/material/Grid';

 const Login = () =>
 {
    const navigate = useNavigate();

    const navigateDashboard = () =>
    {
        navigate("/dashboard");
    }

        return(
            <div className="login-wrapper">
                <Box className="loginBox">
                    <Grid container className='loginGridContainer'
                    flexDirection="column">
                        <Grid item>
                            <Box className="loginText"
                                variant="contained">
                                    Please Log In
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className="userNameText"
                                variant="contained">
                                Username
                            </Box>
                        </Grid>
                        <Grid item>
                            <TextField className='userNameTextField'
                                //onChange={e => setPassword(e.target.value)}            
                                id="outlined-basic"
                                label="Username"
                                >
                            </TextField>
                        </Grid>
                        <Grid item>
                            <Box className="passwordText"
                                variant="contained">
                                    Password
                            </Box>   
                        </Grid>
                        <Grid item>
                            <TextField className='passwordTextField'
                                type="password"
                                //onChange={e => setPassword(e.target.value)}            
                                id="outlined-basic"
                                label="Pasword">
                            </TextField>
                        </Grid>    
                        <Grid item>
                            <Button className="loginButton"
                                onClick={() => navigateDashboard()}
                                type="submit"
                                variant="contained"
                            >
                             Login   
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
 }   
export default Login; 
