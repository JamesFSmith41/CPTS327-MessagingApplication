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
  
        }}
            onClick={HandleClick}
            variant="contained"
        >
         Login   
        </Button>
      );
    }

    function HandleClick(){
        let navigate = useNavigate();
        navigate("/dashboard")
    }

 class Login extends React.Component{

    renderLoginButton() {
        return( 
            <LoginButton></LoginButton>
        );

    }
    render()    {
        return(
            <div className="login-wrapper">
                <h1>Please Log In</h1>
                <form>
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
                <TextField 
                sx={{
                    textAlign: 'center',
                    width: 250,
                    pt: 1,
    
                }}
               // onChange={e => setUserName(e.target.value)}
                id="outlined-basic"
                label="Username"
                >
                </TextField>
    
                <div className='passwordBox'>
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
                </div>
    
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
            </form>
                <div>
                    {this.renderLoginButton()}
                </div>
            </div>
        )
    }
 }   
export default Login; 
