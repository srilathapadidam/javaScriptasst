
// variables(let-var-const)

// var name="my name is ram";
// console.log(name);

//  let name="sriram";
// console.log(name)

// let numbers = 45;
// console.log(numbers);

// let $greeting="good morning";
// console.log($greeting);

// const number=30;
// number=20;  we cant change any values
// console.log(number)

// var number=50;
// number=10;  it will give the result as resent value & skip the previous value
// console.log(number)

// let number=80;
// console.log(number)
// number=60;
// console.log(number)

// scope(block-functional-globe)

// {
//     ashnxkdhvisn
//     abc:def
// }          
// //   here it will have an earror
// {
//     25473489309
// }

// global-scope
// let num=10;
// {
//     console.log(num)
// }
// var a=50;
// {
//     console.log(a)
// }
// const nr=80;
// {
//     console.log(nr)
// }

// swap method done
// let a = 9;
// let b = 4;

// c = a+b;
// console.log(c)

// d = a-b
//  console.log(d)

// a = c-d;
//  console.log(a)


//  after exchange the elements array values double
// let a=3;
// let b=6;

// a = a+b;
// console.log(a)

// b = a-b
// console.log(b) 
// {
//  let sqr=[a*2,b*2];
//  console.log(sqr)


// simple calculator using switch operation 
// assignment operations

// let calculator="*";
// let x=2;
// let y=4;
//  switch(calculator){
//    case"=":
//    console.log(x=y)
//    break;

//    case"+=":
//    console.log(x+=y)
//    break;

//    case"-=":
//    console.log(x-=y)
//    break;

//    case"*=":
//    console.log(x*=y)
//    break;

//    case"/=":
//    console.log(x/=y)
//    break;

//    case"%=":
//    console.log(x%=y)
//    
//    default:
//     console.log("invalid")
//  }
 
// numbers 0f array double using for loop <o/p is 81 64 49 36>
// let numbers=[9,8,7,6];
// console.log(numbers)
// for(let val of numbers){
//     let sqr = val*val;
//     console.log(sqr)
// }


//  numbers in array double <o/p is [1,4,25,36]>
// let array=[1,2,5,6];
// let dob=[];
// for(let val of array)
// {
//     let sqr = val*val;
//     dob.push(sqr)  
// }
// console.log(dob)


// for loop sum

// var arr = [10,5,6,3,8,9]
// var sum = 0;
// for(var i=0; i<arr.length; i++){

//     console.log('sum',sum , 'i',i , 'value',arr[i])

//     sum = sum + arr[i]
// }

// console.log(sum)


//  for in 

// var arr = [10,5,6,3,8,9]
// var sum = 0;

// for(var i in arr){
//     sum = sum + arr[i]
// }

// console.log(sum)


// for of 

// var arr = [1,2,3,4,5,6,7,8,9]

// var sum = 0;

// for(var val of arr){

//     sum = sum + val;
// }

// console.log(sum);


// print 1 to 10 numbers

// for(let i = 1 ; i<=10; i++){

//     console.log(i)
// }


// print odd numbers

// for(let i=1;i<=100;i+=2){

//     console.log(i)
// }

// print multiplication table with 7

// for(let i=1;i<=10;i++){

//     let row = "7 * " + i + "=" +7*i;
//     console.log(row);
// }


// calculate 10! remainder n1 = 1*2*...*n  

// let prod = 1;

// for(let i = 1; i<=10;i++){
//     prod *=i;

// }
// console.log(prod);


// array square  

// let arr = [10,5,6,3,8,9]

// let newArr = []

// for(let val of arr){

//     let sqr = val*val;
   
//     newArr.push(sqr)

// }
// console.log(newArr);


// for this type of operations we also use Map method   

// let arr = [10,5,6,3,8,9]

// arr.map (function(val,index){

//  let sqr = val*val;

//  return sqr;
// })

// if we have array of object 
// map method  

// cars = [
// {name:'skoda',color:'red'},
// {name:'audi',color:'blue'},
// {name:'ferrari',color:'gold'}

// ]

// cars.map(function(item,index){
// //  console.log('item',item);

// console.log( item.color);
// })


// filter

// cars = [
// {name:'skoda',color:'green'},
// {name:'bmw',color:'red'},
// {name:'benz',color:'blue'},
// {name:'ferrari',color:'red'}
// ]


// cars.filter(function(car,index){

//     return car.color == 'red'
// })


// var value = [2,5,4,3,2,6,7,8]

// value.filter(function(val){

//     return (val>6);
// })


// remove duplicate eliments from array

// let list = [2,2,2,4,5,67,8,"giri","giri","babu","mahesh","ntr","chiru","ntr","venkey","venkey"]

// function removeDuplicates(array){

//     return[...new Set(list)];
// }

// console.log(removeDuplicates(list))


// even and add numbers from array  

// let even = [2,3,4,5,6,7,8,9,9,8,3,2]

// even.filter(function(eve){

// return (eve%2)===0
// })
 

// above 6 words only display

// let words = ['banana','bengaali','suzuki','apple','pomagranate']

// words.filter(function(val){

//     return val.length>6;
// })


// ever word start with hello 

// let start = [
//     {name:"giribabu"},
//     {name:"fathu"},
//     {name:"babu"},
//     {name:"Anu"}
// ]

// start.map(function(item){
 
//     // ass = "hello"+' '+item.name; // string concordination  ES5 feature for space between   

//     ass = hello ${item.name}// String litteral ES6 Syntax (back quate1`)

// //   dynami content ni $ lopala pettali


//     console.log(ass);
//     return ass;
// })


//  Calculate the sum of odd 
// numbers greater than 10 
// and less or equal than 30

// let sum = 0;

// for(let i = 11;i<=30;i+=2){

//     sum +=i;
// }

// console.log(sum);


// Create a function that will 
// convert from Celsius to 
// Fahrenheit
// Reminder: C = F – 32 / 1.8

// function CelsiusToFahrenheit(n){

//     return n*1.8+32
// }

// let r = CelsiusToFahrenheit(20);

// console.log(r);



// Create a function that will convert from Fahrenheit to CelsiusReminder: C = F – 32 / 1.8

// function FahrenheitToCelsis(n){

//     return (n-32)/1.8;
// }
// let r = FahrenheitToCelsis(68);

// console.log(r);


// Calculate the sum of numbers in an array of numbers.Example array:[2, 3, -1, 5, 7, 9, 10, 15, 95] Expected output:145

// function sumOfArray(ar){
// var sum = 0;

// for(let i=0;i<ar.length;i++){
       
//     sum +=ar[i];
// }
//   return sum;

// }
// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95]

// let sum = sumOfArray(ar);

// console.log(sum);


// let array = [9,6,2,8,1,4];

// var newStr = [];


// for(let i=array.length-1;i>=0;i--){

//   newStr = newStr+array[i];
 
// } console.log(newStr);