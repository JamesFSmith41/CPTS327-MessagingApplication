const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
// app.use(cors());

// app.use('/login', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

// app.listen(8080, () => console.log('API is running http://localhost:8080/login'));

app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, () => {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

MongoClient.conenct('mongodb-connection-string', (err, client)
{
    mongodb+srv://jfsmith5:Test@cluster0.pt7mltf.mongodb.net/?retryWrites=true&w=majority
    if (err) return console.error(err)
    console.log('Connected to Database')

})
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jfsmith5:<password>@cluster0.pt7mltf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });