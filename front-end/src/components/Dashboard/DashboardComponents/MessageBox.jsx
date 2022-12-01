import {Box,Typography, TextField,Button} from "@mui/material";
import { styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import {useState, useRef, useEffect} from 'react';
import Encryption from "../../Security/Encrypter";
import {encryptAES, decryptAES} from "../../Security/Encrypter";
import { View } from 'react-native';
import "./MessageBox.css";
import axios from 'axios';

let arr = [];



function sendMessage(testMessage)
    {
        console.log("attempt to send message")
        axios
        .post("http://localhost:8000/sendMessage", testMessage)
          .then(() => console.log("message sent"))
          .catch(err => console.error(err));
    }

function clearMessages()
{
  axios
  .post("http://localhost:8000/clearMessages")
  .then(() => console.log("message sent"))
  .catch(err => console.error(err));
}

function pushToArrSend(message, userName1) {
  arr.push(
    <Grid item container>   
                <Grid item xs zeroMinWidth>
                  <Typography >{message}</Typography>
                </Grid>
                <Grid item>
                  <Avatar sx={{ bgcolor: "#2596be" }}>{userName1.substr(0,2)}</Avatar>
                </Grid>
              </Grid>
  );
}

function pushToArrRecieve(message, userName1) {
  arr.push(

          <Grid item container>
                <Grid item>
                  <Avatar sx={{ bgcolor: "#2596be" }}>{userName1.substr(0,2)}</Avatar>
                </Grid>
                <Grid item xs zeroMinWidth
                sx={{
                  m: '1px'
                }}>
                  <Typography>{message}</Typography>
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



function MessageBox() {
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(new Date());
    const [newMessages, setNewMessages] = useState([]);
    const ref = useRef(null);
    const [counter, setCounter] = useState(0);
    const [loadCounter, setLoadCounter] = useState(0);

    let dict = {};

   async function handleClick() {
        setDate(new Date());  
        await setMessage(ref.current.value)
        console.log(message);
        let tempMessage = encryptAES(ref.current.value)
        let messageText = ref.current.value;
        console.log(messageText);
        const testMessage = 
        {
        operation: 'CREATE',
        id: counter,
        username: 'newUser1',
        recipientName: 'newUser2',
        message: tempMessage
        };


        await displaySentMessage(messageText);
        sendMessage(testMessage);
        setCounter(counter+1);
        setNewMessages(testMessage.message);
        console.log(message);
      };

      async function displaySentMessage(message)
      {
        console.log(message);
        await pushToArrSend(message, "Sender");
      }

      
      async function pullMessages()
      {
        let message = null; 

        const messageData = {
          operation: 'CREATE',
          recipientName: 'newUser2',
          id: loadCounter,
        }

        console.log(messageData);
        await axios
        .post("http://localhost:8000/getNewMessages", messageData)
        .then((data) => message = data);
       
        console.log(message);
        if (message != null)
        {
            message.data.forEach(displayMessages);
        }
        // console.log(arr);
        // console.log(dict);
        setLoadCounter(counter);

      }

      function displayMessages(messageData)
      {
        console.log(messageData);
        console.log(messageData.message);
        if (dict[messageData._id] != messageData.message)
        {
          pushToArrRecieve(messageData.message, "en");
          pushToArrRecieve(decryptAES(messageData.message), "de")
          dict[messageData._id] = messageData.message;
          setNewMessages(messageData.message);
        }
        
      }

    return (
        <div className="main">
          <div className="messageArea">
            <Box className="optionsContainer">
              <text className="optionsText">
                Database Options
              </text>
              <button 
              className="pullMessagesButton"
              onClick={() => pullMessages()}
              >
                Pull Messages
              </button>
              <button 
              className="clearMessagesButton"
              onClick={() => clearMessages()}
              >
               Clear Messages
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
                    sx={{ input: { color: 'white' } }}
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




 