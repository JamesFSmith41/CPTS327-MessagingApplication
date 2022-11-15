import {Box,Typography, TextField,Button} from "@mui/material";
import { styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import {useState, useRef, useEffect} from 'react';
import Encryption from "../../Encryption/Encrypter";
import {encryptSHA256, decryptSHA256} from "../../Encryption/Encrypter";
import { View } from 'react-native';
import "./MessageBox.css";

var arr = [];

var userName1= "";


function pushToArr(message, userName1) {
  arr.push(
    <Grid item container>
                <Grid item>
                  <Avatar>{userName1}</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth
                sx={{
                  m: '1px'
                }}>
                  <Typography >{message}</Typography>
                </Grid>
              </Grid>
  );
}
function AutoGridNoWrap () {
  return (
    <Box className="messageBoxes">
    <StyledPaper className="styledPaper">
      <Grid container className="messageGrid"
      spacing={1}>
          {arr}
      </Grid>
    </StyledPaper> 
  </Box>
  );
}

const StyledPaper = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
maxWidth: 750,
color: theme.palette.text.primary,
}));



const MessageBox = () => {
    const [message, setMessage] = useState("");
    const ref = useRef(null);
    const handleClick = () => {
        setMessage(ref.current.value)
        var tempMessage = encryptSHA256(ref.current.value)
        pushToArr(tempMessage, "en")
        pushToArr(decryptSHA256(tempMessage), "de")
      };

    return (
        <div className="main">
          <div className="messageArea">
            <Box className="optionsContainer">
              <text className="optionsText">
                Change Encryption Type
              </text>
              <button className="sha256">
                  SHA256
              </button>
              <button className="AES">
                AES
              </button>
            </Box>
            <Grid container className="messageBox"
              justifyContent="flex"
              flexDirection="row">
              <Grid item
              display="flex">
                <Box className="messages">
                  <AutoGridNoWrap message={message}/>
                </Box>  
              </Grid>
              <Grid item>
              <Box className="containerBox">
                  <TextField  className="messageTextField"
                    id="messageBox"
                    name="messageBox"
                    inputRef={ref}>
                  </TextField>
                  <button className="sendButton"
                      onClick={() => handleClick()}>
                      Send 
                  </button>
                  </Box>
              </Grid>
            </Grid>
          </div>    
        </div>
    );
}
export default MessageBox;




 