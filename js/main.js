

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
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
console.log(paring.next().value);
