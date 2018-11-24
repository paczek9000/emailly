const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/welcome', (req, res) =>{
  res.send({greetingMessage: ' <h1>No witam!</h1>'} );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
