var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle l= " + l + " b= " + b);

    if ( l <=0 || b <=0){
        console.log("Rect dims shud b greater than zero: l = " + l + " b = " + b);
    }
    else {
        console.log("The area of the rect is "+ rect.area(l,b));
        console.log("The perimeter of rect is "+rect.perimeter(l,b));
        console.log("The diagonal of rect is "+ rect.diagonal(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);