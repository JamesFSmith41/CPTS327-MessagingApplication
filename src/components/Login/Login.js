import './Login.css'
import {Box,Typography, TextField,Button} from "@mui/material";
import { useNavigate} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
  
function WithNavigate(props) {
    let navigate = useNavigate();
    return <LoginButton {...props} navigate={navigate} />
}

function LoginButton() {
      return (
        <Button
        sx={{
            textAlign: 'center',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: 'h6.fontSize',
            fontFamily: 'monospace',
            width: 250,
            height: 40,
            borderRadius: '6px',
            justifyContent: 'center',
            borderColor: 'text.primary',
            border: 1,
  
        }}
            onClick={HandleClick}
            variant="contained"
            style={{backgroundColor: "#2596be"}}
        >
         Login   
        </Button>
      );
    }

    function HandleClick(){
        let navigate = useNavigate();
        navigate("/dashboard")
    }

 function Login ()
 {


        return(
            <div className="login-wrapper">
                <Box
                
                sx={{ 
                    overflow: 'visibile',
                    whiteSpace: 'normal',
                    height: '400px',
                    overflow: 'auto',
                    justifyContent: 'center',
                    borderRadius: 1,
                    borderColor: 'text.primary',
                    p: 1,

                }}
                    style={{backgroundColor: "#e6ecff"}}

                        >
                <Grid container
                direction='column'
                flexDirection="column"
                >

                    <Grid item>
                    <Box
                        sx={{
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            fontSize: 'h6.fontSize',
                            fontFamily: 'monospace',
                            width: 250,
                            height: 40,
                            borderRadius: '6px',
                            justifyContent: 'center',
                        }}
                        variant="contained"
                        style={{backgroundColor: "#3fb0d9"}}
                        >
                    <p>Please Log In</p>
                </Box>
                    </Grid>
                    <Grid item>
                    <Box
                sx={{
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    fontSize: 'h6.fontSize',
                    fontFamily: 'monospace',
                    width: 250,
                    height: 40,
                    borderRadius: '6px',
                    justifyContent: 'center',
                }}
                 variant="contained"
                 style={{backgroundColor: "#3fb0d9"}}
                >
                    <p>Username</p>
                </Box>
                </Grid>
                <Grid item>
                <TextField
                            sx={{
                                textAlign: 'center',
                                width: 250,
                                pt: 1,
                            }}
                            type="password"
                            //onChange={e => setPassword(e.target.value)}            
                            id="outlined-basic"
                            label="Username"
                            >
                            </TextField>
                    </Grid>
                        <Grid item>
                        <Box
                            sx={{
                                textAlign: 'center',
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                fontSize: 'h6.fontSize',
                                fontFamily: 'monospace',
                                width: 250,
                                height: 40,
                                borderRadius: '6px',
                                justifyContent: 'center',
                            }}
                            variant="contained"
                            style={{backgroundColor: "#3fb0d9"}}
                            >
                                <p>Password</p>
                            </Box>  
                        </Grid>
                        <Grid item>
                        <TextField
                            sx={{
                                textAlign: 'center',
                                width: 250,
                                pt: 1,
                            }}
                            type="password"
                            //onChange={e => setPassword(e.target.value)}            
                            id="outlined-basic"
                            label="Pasword"
                            >
                            </TextField>
                        </Grid>    
                        <Grid item>
                           <LoginButton>
                           </LoginButton>
                        </Grid>
                </Grid>
                </Box>
            </div>
        )
 }   
export default Login; 
