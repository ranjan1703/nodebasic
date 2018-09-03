//setting up server
const http =require('http');
const fs =require('fs');
const path=require('path');
const hostname ='localhost';
const port =3000;
const server =http.createServer((req,res)=>{
    /* console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Tpye', 'text/html');
    res.end('<html><body><h1>Hello Node</h1></body></html>'); */


    console.log("Request for " + req.url + 'by method ' + req.method);
if(req.method=='GET'){  // if client request for file using GET method
    var fileUrl;
    if(req.url=='/') fileUrl='/index.html';
    else fileUrl=req.url;

    var filePath=path.resolve('./public' + fileUrl);
    const fileExt=path.extname(filePath);
    if(fileExt=='.html'){ //if requested file is html 
        fs.exists(filePath,(exists)=>{ 
            if(!exists){//to check if file exixt if not return error code
                res.statusCode=404;
                res.setHeader('Content-type', 'text/html');
                res.end('<html><body><h1>ERROR 404: ' + fileUrl + ' not found</h1></body></html>');
            return;
            }
            res.statusCode=200;// if file exist return the file to client
            res.setHeader('Content-type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        })
    }
    else{    // if requested file is not html
        res.statusCode=404;
        res.setHeader('Content-type', 'text/html');
        res.end('<html><body><h1>ERROR 404: ' + fileUrl + ' not an HTML file</h1></body></html>');
    return;
    }
}
else{ // If request method is not GET
    res.statusCode=404;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>ERROR 404: ' + req.method + ' not supported</h1></body></html>');

}


})

//starting the server

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})