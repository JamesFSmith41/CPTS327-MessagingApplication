import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Box,Typography, TextField,Button} from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Prefernces() {
    return(
<div className="main">
<Grid
          container
          spacing={15}
          direction="column"
          flexDirection="row"

          style={{ minHeight: '100px' }}
        >
        <Grid item xs={3}>
        <Box
        sx={{ 
          overflow: 'visibile',
          whiteSpace: 'normal',
          height: '50px',
          width: '250px',
          textAlign: 'center',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          fontSize: 'h5.fontSize',
          fontFamily: 'monospace',
          //borderRadius: 1,
          borderColor: 'text.primary',
          border: 1,
          }}
          style={{backgroundColor: "#66b3ff"}}
          > 
            <Typography
             variant="h5" 
             color="common.white"
             align="center"
             >
                Preferences
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={3}>
        <Box
        sx={{ 
          overflow: 'visibile',
          whiteSpace: 'normal',
          height: '50px',
          width: '500px',
          textAlign: 'center',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          fontSize: 'h4.fontSize',
          fontFamily: 'monospace',
          //borderRadius: 1,
          borderColor: 'text.primary',
          border: 1,
          m: '1px'
          }}
          style={{backgroundColor: "#66b3ff"}}
          > 
            <Typography 
              variant="h4"
              color="common.white"
              align="center"
              >
              Secure Messaging App
            </Typography>
            </Box>        
            </Grid>   
        </Grid> 
            <NavigationBar>
          </NavigationBar>
        </div>    
        );
}