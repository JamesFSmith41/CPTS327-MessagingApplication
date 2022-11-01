import * as React from 'react';
import MessageBox from './DashboardComponents/MessageBox';
import {Box,Typography, TextField,Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import {useState} from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

const Dashboard = () => { 
    return(
      <div className="dash">
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
          borderRadius: 1,
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
                Dashboard
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
          borderRadius: 1,
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
        <MessageBox>
        </MessageBox>
    </div>
    )
  }

export default Dashboard;