

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

console.log([ 1,2,3,4].reduce(function(a,v) {return  a*v;}));


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

    const myObj={
        name:'henry'
    ,age:18
    }
    myObj.name='sandy';
    console.log(myObj);

    // classic function declartion

    function myfunction(a,b){

        return Number(a)+Number(b);
      
    }
    console.log(myfunction(3,7));
//ES6 style

    myfunction=(a,b)=>Number(a)+Number(b);
    console.log(myfunction(3,8));

// bigger function
    myOtherfunction=(a,b) =>{
const myAnser=Number(a)+Number(b);
return myAnser;

    }    
    console.log(myOtherfunction(3,9));


    addallNums=(...num)=>num.reduce((a,v)=> a+v);
    console.log(addallNums(64,6,10));   

    findHighNums = ( minNum = 0, ...args/* Named whatever we want. But needs the three dots! */ ) => { // ...args will capture any number of arguments that we pass!
        minNum = Number( minNum );
        if ( minNum === NaN ) minNum = 0;
        const highNums = args.filter( ( element ) => element > minNum );
        // console.log( args ); // It can be called by the name we had inbetween our parenthesis.
        return highNums;
    }
    console.log( findHighNums( 5, 2, 20, 50, 3, 0, 10, 28, -508 ) );
    
    // function default parameter vaues
// we can set defaluts ,to prevent errors in case nothing gets passed in for a parameter
    addNums = (x=0,y=0)=>x+y;
    console.log(addNums());



    // rest paramter

    findHighNum=(...args)=>{
    console.log(args);
    return args;
    }


// template literals
    const helloVar='Helo,world';
    
    const sampleName='sam';
    const myNewstring=` hey ther ,my name is ${sampleName};'i'd like to 
    give you a big :"${helloVar}"!!`;
    console.log(myNewstring);
