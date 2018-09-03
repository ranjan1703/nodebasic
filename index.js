const express = require('express');
const http = require('http');
const morgan =require('morgan');
const bodyParser= require('body-parser');


const dishRouter = require('./routes/dishRouter');



const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));


app.use(bodyParser.json());


app.use('/dishes', dishRouter); //mounting here


/* app.all('/dishes', (req,res,next)=>{
res.statusCode=200;
res.setHeader('Content-type','text/plain');
next();
});

app.get('/dishes', (req,res,next)=>{
    res.end('sending all dishes');
});
app.post('/dishes', (req,res,next)=>{
res.end('adding dishes: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('PUT Opration not supported on /dishes');
});
app.delete('/dishes', (req,res,next)=>{
    res.end('Deleting all dishes');
});*/


/* id end point */

/* app.get('/dishes/:dishId', (req,res,next)=>{
    res.end('will send details of the dish:' + req.params.dishId);
});
app.post('/dishes/:dishId', (req,res,next)=>{
res.end('Post is not supported for /dishes/' + req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: ' + req.params.dishId);
    res.end('will update the dish: ' + req.body.name 
 + 'with details: ' + req.body.description);
});
app.delete('/dishes/:dishId', (req,res,next)=>{
    res.end('Deleting dish: ' + req.params.dishId);
}); 
 */



/* //telling express to serve static file
app.use(express.static(__dirname+ '/public'))//looking for file in public folder 

app.use((req, res, next) => {
   // console.log(req.headers);//when we use morgan we dnt need to use this
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
  
  }); */
  
  const server = http.createServer(app);
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });