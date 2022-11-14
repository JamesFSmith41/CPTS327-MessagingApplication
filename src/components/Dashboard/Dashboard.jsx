import * as React from 'react';
import MessageBox from './DashboardComponents/MessageBox';
import NavigationBar from '../NavigationBar/NavigationBar';
import DashboardHeader from './DashboardComponents/DashboardHeader';
import "./Dashboard.css"

const Dashboard = () => { 
    return(
        <div className="dash">
            <div className="dashHeader">
              <DashboardHeader>
              </DashboardHeader>
              </div>  
            <div className='navBar'>
              <NavigationBar>
              </NavigationBar>          
            </div>
            <div className="messageArea">
              <div className='messageBox'>
                <MessageBox></MessageBox>
              </div>
            </div>
      </div>
    )
  }

export default Dashboard;