const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//     res.send({
//         token: 'test123'
//     });
// });

// app.listen(8080, () => console.log('API is running http://localhost:8080/login'));
app.listen(3000, () => {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})
