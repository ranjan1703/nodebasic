
//understanding callback
module.exports = (x,y,callback) =>{
    if(x<=0 || y<=0){
        setTimeout( ()=>//callback take two argument 1 is error and 2 is result
        callback(new Error ("Rectangle dimension should be greater than 0"),
    null),
 2000);
}
else{
    setTimeout(()=> callback(null, //here null because it will not return error.
        {
        perimeter:() => (2*(x+y)),
     area:() => (x*y)

    }),
    
    2000);
}
}



//exports.perimeter=(x,y) => (2*(x+y));
//exports.area=(x,y) => (x*y);