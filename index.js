//setting up server
const http =require('http');

const hostname ='localhost';
const port =3000;
const server =http.createServer((req,res)=>{
    console.log(req.headers);
    

    res.statusCode=200;
    res.setHeader('Content-Tpye', 'text/html');
    res.end('<html><body><h1>Hello Node</h1></body></html>');

})

//starting the server

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})