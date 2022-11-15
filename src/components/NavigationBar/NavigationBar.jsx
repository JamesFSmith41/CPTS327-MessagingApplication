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
            <button className='dashboardButton'
                    type="submit"
                    variant="contained"
                    onClick={() => navigateDashboard()}
                >
                Dashboard
                </button>
                <button className='preferenceButton'
                type="submit"
                variant="contained"
                onClick={() => navigatePreferences()}
            >
            Preferences
            </button> 
        </div>
        <div className="logout">
            <button className='logoutButton'
                type="submit"
                variant="contained"
                onClick={() => navigateLogin()}
            >
            Log Out
            </button> 
        </div>
    </div>

    
);
}

export default NavigationBar;