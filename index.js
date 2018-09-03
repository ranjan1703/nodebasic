//This exapmle to illustrate various features of node and how to construct node module
var rect ={
    perimeter:(x,y) => (2*(x+y)),
    area:(x,y) => (x*y),
};
function solveRect(l,b){
    console.log("Solving for rectangle with l= " + l + " and b = " + b);
    if(l<=0 || b<=0){
        console.log("Rectange dimension should be greater than 0");
    }else{
        console.log("The area of the rectange is" + rect.area(l,b));
        console.log("The perimeter of the rectange is" + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,6);
solveRect(0,0);