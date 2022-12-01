import * as React from 'react';
import {Box,Typography, TextField,Button} from "@mui/material";
import Grid from '@mui/material/Grid';
import './DashboardHeader.css';

function DashboardHeader ()
{
    return(
        <div className='headerBox'>
            <Grid
                container
                flexDirection="row"
            >
            <Grid item xs={3}>

                <Typography
                variant="h5" 
                color="common.white"
                align="center"
                >
                    Dashboard
                    </Typography>
            </Grid>
            <Grid item xs={8}>   
                <Typography 
                    variant="h4"
                    color="common.white"
                    align="center"
                    >
                    Secure Messaging App
                </Typography>
                </Grid>   
                </Grid>
        </div>

    ) 
}

export default DashboardHeader;