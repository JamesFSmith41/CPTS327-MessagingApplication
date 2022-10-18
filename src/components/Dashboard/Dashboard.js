import { render } from '@testing-library/react';
import {useNavigate} from 'react-router-dom'
import Preferences from '../Preferences/Preferences';
import {Box,Typography, TextField,Button} from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';



function AutoGridNoWrap (message) {
        return (
            <Box sx={{ 
                overflow: 'visibile',
                whiteSpace: 'normal',
                height: '450px'
                }}>
              <StyledPaper
                sx={{
                  my: 5,
                  mx: 'auto',
                  p: 2,
                  width: 500,
                }}
              >
                <Grid container wrap="wrap" spacing={2}>
                  <Grid item>
                    <Avatar>User</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography wrap>{message}</Typography>
                  </Grid>
                </Grid>
                
              </StyledPaper> 
            </Box>
          );
    }

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));

var mess = `Test.`;

function TextChat(text) {
    this.setState({
         mess: text
     })
     Dashboard()
}

class Dashboard extends React.Component {
    
    constructor() {
        super();
        this.state = {
          message: "Test",
        };
    }

    renderAutoGridNoWrap(mess)
    {
        return(
            AutoGridNoWrap(mess)
        );
    }
    render() 
    {
        return (
            <div className="main">
            <h2>Dashboard</h2>
                <div>
                   {this.renderAutoGridNoWrap(mess)}
                </div>
            <Grid container
            justifyContent="flex-end"
            flexDirection="row"
            >
                <Grid item
                display="flex">
                    <TextField
                        sx={{
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            fontWeight: 'bold',
                            fontSize: 'h6.fontSize',
                            fontFamily: 'monospace',
                            width: 750,
                            borderRadius: '6px',
                            justifyContent: 'center',
                            pb: 1,
                        }}
                    >
                    </TextField>
                </Grid>
                <Grid item>
                    <Button
                    sx={{
                        height: 55,
                        width: 150,
                        spacing: '10px'
                    }}
                        type="submit"
                        variant="contained"
                        style={{backgroundColor: "#2596be"}}
                        onClick={() => this.TextChat()}
                    >
                        Send 
                    </Button>
                </Grid>
            </Grid>
                
            </div>
        );
    }
}

export default Dashboard;