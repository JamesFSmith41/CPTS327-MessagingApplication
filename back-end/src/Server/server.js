import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as database from '../Database.js';

const app = express();

//app.use("/",router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
}); 

app.post('/sendMessage', (req, res) => {
    let op = req.body.operation;
    let id = req.body.id;
    let name = req.body.username;
    let recpName = req.body.recipientName;
    let message = req.body. message;
    database.executeDatabaseMessagespOerations(op, name, recpName, message, id);
});

app.post('/getNewMessages', async(req, res) => {
    let recpName = req.body.recipientName;
    console.log(recpName);

    let id = req.body.id;

    const messages = await database.executeDatabaseMessagespOerations('GETMESSAGES', null, 'newUser2', null, id).then(messages => {res.send(messages)});
    //await console.log(messages);
});

app.post('/clearMessages', async(req, res) => {
    await database.executeDatabaseMessagespOerations('CLEAR', null, null, null, null);
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });