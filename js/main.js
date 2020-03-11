



var myArray=['hello,word',2,3,true,5,null];
var myVlaue=myArray.find(function(element){return element>4;});
console.log(myVlaue);

var isMystringinside=myArray.find(function(element){return element==='hello,word';});
console.log(isMystringinside);
var isMystringinside=myArray.find(function(element){return element==='goodbye';});
console.log(isMystringinside);
