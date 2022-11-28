const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb')
const connectionString = 'mongodb+srv://jfsmith5:Test@cluster0.pt7mltf.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(connectionString);

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


async function run() {
    try 
    {
        console.log('Connected to Database')
        // const database = client.db('testDatabase');
        // const col = database.collection('testData');
        const books = client.db('testDatabase')
        // const query = {testField: "testVar"};
        // const data = await col.findOne(query);

        console.log(books);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);

