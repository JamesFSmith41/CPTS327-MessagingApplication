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
    <Box sx={{ 
      overflow: 'visibile',
      overflow: 'auto',
      }}>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 0.5,
        width: '900px',
      }}
    >
      <Grid container 
            justifyContent="flex"
            wrap="wrap" 
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
          <View style = {{height: '100%'}}>  
                <Grid container
            justifyContent="flex"
            flexDirection="row"
            >
                <Grid item
                display="flex">
                <Box  sx={{
                height: '500px',
                width: '900px',
                overflow: 'auto',
                justifyContent: 'center',
                background: "#242526",
                display: 'flex',
                borderRadius: '6px',
                border: 1
              }}  
            >
                <AutoGridNoWrap message={message}/>
            </Box>
                </Grid>
                <Grid item>
                <Box  sx={{
                height: '55px',
                overflow: 'auto',
                justifyContent: 'center',
                background: "#353d46",
                display: 'flex',

              }}  
            >
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
                            background: " #3A3B3C"
                        }}
                        id="messageBox"
                        name="messageBox"
                        inputRef={ref}
                            >
                    </TextField>
                    <Button
                    sx={{
                        height: 55,
                        width: 150,
                        spacing: '10px',
                        borderRadius: 2,
                        borderColor: 'text.primary',
                        border: 1,
                    }}
                        type="submit"
                        variant="contained"
                        style={{backgroundColor: "#2596be"}}
                        onClick={() => handleClick()}
                    >
                        Send 
                    </Button>
                    </Box>
                </Grid>
            </Grid>
          </View>
        </div>
    );
}
export default MessageBox;




 