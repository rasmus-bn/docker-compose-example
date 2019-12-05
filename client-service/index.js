const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.get('/', (req, res1) => {

  fetch('http://server-service:3000')
    .then(res => res.text())
    .then(body => res1.send(`Hello from client. Msg from server: "${body}"`));

});

app.listen(port, () => console.log(`Example app listening on port ${port}`))
