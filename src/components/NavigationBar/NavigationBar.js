import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import {Box,Typography, TextField,Button} from "@mui/material";
import Grid from '@mui/material/Grid';

const NavigationBar = () => {
    const navigate = useNavigate();

    const navigateDashboard = () =>
    {
        navigate("/dashboard");
    }

    const navigatePreferences = () =>
    {
        navigate("/preferences");
    }

    return( 
    <div className="main">
        <Grid container
            justifyContent="flex"
            flexDirection="row"
            >
        <Grid item display="flex">
             <Button
            sx={{
                height: 35,
                width: 150,
                spacing: '10px',
                borderRadius: 2,
                borderColor: 'text.primary',
                border: 1,
            }}
                type="submit"
                variant="contained"
                style={{backgroundColor: "#2596be"}}
                onClick={() => navigateDashboard()}
            >
                Dashboard 
            </Button>
        </Grid>
        <Grid item>
            <Button
            sx={{
                height: 35,
                width: 150,
                spacing: '10px',
                borderRadius: 2,
                borderColor: 'text.primary',
                border: 1,
            }}
                type="submit"
                variant="contained"
                style={{backgroundColor: "#2596be"}}
                onClick={() => navigatePreferences()}
            >
                Preferences 
            </Button>
        </Grid>
    </Grid>
    </div>
);
}

export default NavigationBar;