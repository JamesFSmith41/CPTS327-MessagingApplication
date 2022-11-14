import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Box,Typography, TextField,Button} from "@mui/material";
import "./NavigationBar.css"
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

    const navigateLogin = () =>
    {
        navigate("/");
    }

    return( 
    <div className="navbar">    
        <div className="loggedInOptions">
            <Button className='dashboardButton'
                    type="submit"
                    variant="contained"
                    onClick={() => navigateDashboard()}
                >
                Dashboard
                </Button>
                <Button className='preferenceButton'
                type="submit"
                variant="contained"
                onClick={() => navigatePreferences()}
            >
            Preferences
            </Button> 
        </div>
        <div className="logout">
            <Button className='logoutButton'
                type="submit"
                variant="contained"
                onClick={() => navigateLogin()}
            >
            Log Out
            </Button> 
        </div>
    </div>

    
);
}

export default NavigationBar;