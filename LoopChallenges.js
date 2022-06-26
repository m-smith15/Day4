// 1 Print Odds 1-20
function printOdds120(){
    for(var x=1;x<21;x++){
        if(x%2!=0){
            console.log(x);
        }
    }
}
// printOdds120();
// Decreasing Multiples of 3 (100 to 0)
function decreasingMultiples(){
    var i = 100
    while(i>0){
        if(i%3 === 0){
            console.log(i);
            i--
        }
        i--
    }
}
// decreasingMultiples();
// Print the sequence
function printSequence(){
    for(var x=4; x> -5; x-=1.5){
        console.log(x);
    }
}
// printSequence();
// Sigma
var sum = 0;
for (var x=1;x<101;x++){
    sum += x
}
// console.log(sum);
// Factorial
var product = 1;
for(var x=1;x<13;x++){
    product = product * x;
}
console.log(product);