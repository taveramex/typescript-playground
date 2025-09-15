const myArray:number[] = [1,2,3,4,5];
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);
console.log('myArray', myArray);

const myArray2:(string|number)[] = [...myArray];


myArray2.push("random string");

console.log(myArray2, myArray);