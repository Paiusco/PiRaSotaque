const express = require('express');
let server = express();
let port = process.env.PORT || 3333;

server.get('/', (request, response) => {
    // __dirname is the absolute path of the currently executing file, index.js
    // if you don't specify a root option then you should use an absolute path for the html file
   response.sendFile('tradutor.html', { root: __dirname });
})
server.listen(port, () => { console.log(`Server listening on port ${port}.`); });