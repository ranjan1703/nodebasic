const express = require('express');
const http = require('http');
const morgan =require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//telling express to serve static file
app.use(express.static(__dirname+ '/public'))//looking for file in public folder 

app.use((req, res, next) => {
   // console.log(req.headers);//when we use morgan we dnt need to use this
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
  
  });
  
  const server = http.createServer(app);
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });