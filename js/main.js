

// find()

var myArray=['Hello,Word',2,3,true,5,null,38];
var myVlaue=myArray.find(function(element){return element>4;});
console.log(myVlaue);
var myVlaue=myArray.find(function(element){return element<4;});
console.log(myVlaue);
var isMystringinside=myArray.find(function(element){return element.toLowerCase() ==='hello,word';});
console.log(isMystringinside);
var isMystringinside=myArray.find(function(element){return element==='goodbye';});
console.log(isMystringinside);
// findAnIndex()
var findAnIndex=myArray.findIndex(function(element){return element===2;});
console.log(findAnIndex);



// entries()
var paring=myArray.entries();
console.log(paring); //Return an iterator.
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);

var fromArray=Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(fromArray);


var fromArray2=Array.from('Hello,Word');
console.log(fromArray2);

var Filtered=myArray.filter(function(element){return element>4;});
console.log(Filtered);

var reduceResult=myArray.reduce(function(accumulator,curretval){

    return accumulator +curretval;
});
console.log(reduceResult);

console.log([ 1,2,3,4].reduce(function(a,v) {return  a+v;}));


var x=3;
let y=7;
const z=36;

for(var myVar=0;myVar<10; myVar++){
console.log('for loop itteration...')

}
console.log('myVar='+myVar)

for(let myNewVar=0;myNewVar<10; myNewVar++){
    console.log('for loop itteration...')
    console.log('myVar='+myNewVar)

    }
