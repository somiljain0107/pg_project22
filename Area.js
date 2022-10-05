var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
console.log("<-----Extension of file---->")
name = "file.png"
extension = name.split('.').pop()
console.log("File name is ",name)
console.log("File extension is: ",extension);

console.log("<-----Sum of two integers---->")
let int1 = 2
let int2 = 3
console.log("First interger is: "+int1+" Second integer is: "+int2)

if(int1==int2){
 console.log((int1+int2)*3)}
else{ 
 console.log("Sum is:" + (int1+int2))}