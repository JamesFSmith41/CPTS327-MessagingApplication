import {Box,Typography, TextField,Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import {useState, useRef, useEffect} from 'react';

var arr = [];
var userName1 = "Test";
 
function pushToArr(message) {
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
      whiteSpace: 'normal',
      height: '350px',
      overflow: 'auto'
      }}>
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 0.5,
        width: 500,
      }}
    >
      <Grid container 
            justifyContent="flex-end"
            wrap="wrap" 
      spacing={1}>
          {/* And here I render the box array */}
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
maxWidth: 500,
color: theme.palette.text.primary,
}));



const MessageBox = () => {
    const [message, setMessage] = useState("");
    const ref = useRef(null);

    const handleClick = () => {
        setMessage(ref.current.value)
        pushToArr(ref.current.value)
      };

    return (
        <div className="main">
            <AutoGridNoWrap message={message}/>
            <Grid container
        justifyContent="flex-end"
        flexDirection="row"
        >
            <Grid item
            display="flex">
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
                        background: " #ffffff"
                    }}
                    id="messageBox"
                    name="messageBox"
                    inputRef={ref}
                        >
                </TextField>
            </Grid>
            <Grid item>
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
            </Grid>
        </Grid>
        </div>
    );
}
export default MessageBox;



// let ciphertext;

// /*
// Fetch the contents of the "message" textbox, and encode it
// in a form we can use for the encrypt operation.
// */
// function getMessageEncoding(message) {
//  // const messageBox = document.querySelector("#rsa-oaep-message");
//  // let message = messageBox.value;
//   let enc = new TextEncoder();
//   return enc.encode(message);
// }

// /*
// Get the encoded message, encrypt it and display a representation
// of the ciphertext in the "Ciphertext" element.
// */
// async function encryptMessage(key) {
//   let encoded = getMessageEncoding();
//   ciphertext = await window.crypto.subtle.encrypt(
//     {
//       name: "RSA-OAEP"
//     },
//     key,
//     encoded
//   );

//   let buffer = new Uint8Array(ciphertext, 0, 5);
//   const ciphertextValue = document.querySelector(".rsa-oaep .ciphertext-value");
//   ciphertextValue.classList.add('fade-in');
//   ciphertextValue.addEventListener('animationend', () => {
//     ciphertextValue.classList.remove('fade-in');
//   });
//   ciphertextValue.textContent = `${buffer}...[${ciphertext.byteLength} bytes total]`;
// }

// window.crypto.subtle.generateKey(
//   {
//   name: "RSA-OAEP",
//   // Consider using a 4096-bit key for systems that require long-term security
//   modulusLength: 2048,
//   publicExponent: new Uint8Array([1, 0, 1]),
//   hash: "SHA-256",
//   },
//   true,
//   ["encrypt", "decrypt"]
// ).then((keyPair) => {
//   const encryptButton = document.querySelector(".rsa-oaep .encrypt-button");
//   encryptButton.addEventListener("click", () => {
//     encryptMessage(keyPair.publicKey);
//   });

 