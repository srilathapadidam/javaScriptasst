
// task 1js
// swap method with out using 3rd variable after exchange variables o/p should be doubled
// let a=3;
// let b=6;

// a = a+b;
// console.log(a)

// b = a-b
// console.log(b)

// a = [a*2,b*2];
// console.log(a)

// Task 43
// switch cnditions for arithematic oprts
// let calculator ="*";
// let x = 40;
// let y = 90;
// switch (calculator){
//     case "+":
//         console.log(x+y);
//         break;
//     case "-":
//          console.log(x-y);
//         break;
//     case "/":
//         console.log(x/y);
//         break;
//     case "%":
//         console.log(x%y);
//         break;
//     case "*":
//         console.log(x*y);
//         break;
//     default:
//         console.log(invaliderror);
//     }

// 
// Task 44
// usings switch condition for statements
// let percentage=100;
// switch(true){
//     case percentage >=40 && percentage <=50:
//         console.log("Buy a pen")
//         break;
//     case percentage >=50 && percentage <=60:
//         console.log("Buy a book")
//         break;
//      case percentage >=60 && percentage <=70:
//         console.log("Buy a bag")
//         break;
//     case percentage >=70 && percentage <=80:
//         console.log("Buy a watch")
//         break;
//     case percentage >=80 && percentage <=90:
//         console.log("Buy a Mobile")
//         break;
//     case percentage >=90 && percentage <=100:
//         console.log("Buy a Laptop")
//         break;
//      default:
//             console.log("fail")
// }

//  Task-45
//  else-if condition applied with comparision

//  let aadhar="234567890123";

//  console.log(typeof(aadharno)=="number");
//  if(aadhar.lenght==12){
//     console.log("length of aadhar is valid");
// }
// else if(aadhar!==0 && aadhar!==1){
//     // console.log("the enetered aadhar no shouldnot start with 0 or 1");
// console.log("Aadhar in digits are valid") 
//    }
// else{
//     console.log("invalid aadhar number");
// }

// Task 46 done


// check if a number is an even or odd. then the following conditions must be satisfied.
//      a) "given Number is Even and to print double of the number"
//      b) "given Number is odd and to print adding by two"

// let x=26; 
// if(x %2===0){
//     console.log("x is even number");
//     console.log(x*2);
// }else if((x %2!==0)){
//     console.log("x is odd number");
//     console.log(x+2);

// }
    
// // task-6 
// // with using loop display No.r 1 to 10 in same line
// let numbers=""
// for (let i=1; i<=10;i++){
//     numbers +=i+","
// }
// console.log(numbers)

// task-7
// sum of all numbers 1 to 50
// let sum=1;
// for(i=1;i<50;i++){
// sum=sum+i
// }
// console.log(sum)

// (or)
// let sum=0;
// for(let i=1;i<=50;i++){
//     sum=i+sum;
// }
// console.log(sum);

// factorial of given number
// let sum=0;
// for(i=1;i<3;i++){
//     sum+=3*i;
// }
// console.log(sum);

// task-8
// display the factorial for given Number
// var num=14
// var fact=1
// for (var i=num;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact);
 
// (or)

// let num=10;
// let result=1;
// for(i=1;i<num;i++){
//     result*=i;
// }
// console.log(result)



// task-9
// fibonacci sequence upto certain no.r of terms
// let a=8,b=1;
// for(i=0;i<10;i++){
//     let sum=a+b;
//     a=b;
//     b=sum;
//     console.log(a)
// }

// (or)

// let a=0,b=1;
// for(i=0;i<10;i++){
//     let sum=a+b;
//     a=b;
//     b=sum;
//     console.log(a);
// }


// task-10
// print multiplication table for certain No.r
// let num=15
// for(i=1;i<num;i++){
//     let mul=num*i;
//     console.log(mul)
// }

// task-11
// given number prime or not using loop
// let num=14
// let isprime=false
// if(num<=1){
//     isprime=false;
// }
// else{
//     for (i=2;i<num;i++){
//         if(num% i===0)
//         {
//             isprime=false;
//             break;
//         }
//     }
// }
// if(isprime){
//     console.log("it is aprime numbers",num)
// }
// else
// {
//     console.log("it is not a prime number",num)
// }

// (or)

// let number = 19;
// count = 0;
// for (i = 2; i <= number / 2; i++) {
   
//    if (number % i == 0) {
//        count = 1
//    }
// }
// if (number == 1) {
//     console.log("1 is neither prime nor composite.");
// }
// else {
//     if (count == 0)
//        console.log("is a prime number.", number);
//     else
//        console.log(" is not a prime number.", number);
// }


// task-12
// vowels in a given string



// task-13
// largest numr in an array of integers
// let x=[1,3,9,15,27,48,67,89,92,98];
// let y=[];
// for(let i=0;i<x.length;i++){
//     for(let j=1;j<x.length;j++){
//         if(x[i]>x[j]&&x[i]>y){
//             y=x[i];
//         }
//     }
// }
// console.log(y);


// task-14
// common elements b/w two arrays
// let i,j,result;
//  let array1=[24,65,76,45,34];
//  let array2=[45,43,52,24,79];
//   let c_elements=[];
// for( i=0;i<array1.length;i++){
//     for( j=0;j<array2.length;j++){
//         if(array1[i]==array2[j]){
           
//          console.log(c_elements=array1[i],array2[j])          
//         }
//     }
// }
// //console.log(result);

// Calculate the sum of numbers in an array Ex array:[2, 3, -1, 5, 7, 9, 10, 15, 95] output:145

// revers elements task-15
// // let i , revers;
//  let names=["aadhya","abhi","sri","ram"];
//  for(i=names.length-1;i>=0;i--){
//    revers=revers+names[i];
//  }
//  console.log(revers);

// (or)

// var str = 'sriram'

// var newStr = ''

// var arr = [...str];


// var newStr = "";

// for(var i=arr.length-1; i>=0; i--){


//     // console.log(i)
    
//     newStr = newStr + arr[i];

//     console.log(newStr)

// }

// task-16
// let arrayOfItems = [6999, 8999, 10999, 11999,12999 ];

//     let calculate = 0;
//     for (let i = 0; i < arrayOfItems.length; i++) {
//         calculate = calculate + arrayOfItems[i];
//     }
//     let totalGstCalculate = (calculate * GST) / 100;
//     let totalAmount = calculate + totalGstCalculate;
//     if (totalAmount >= 30000) {
//         console.log(totalAmount + 1000);
//     } else {
//         console.log(totalAmount + 500);
//     }



// reverse of a string





// const isAnagram = (name1, name2)=>{
//     const print1 = name1.toLowerCase().split("").sort().join("");
//     const print2 = name2.toLowerCase().split("").sort().join("");
//     return print1 === print2 
// }

//     const result = isAnagram("mom", "dad");

//     console.log(result)


// question1

// function hoistExample() {
//     var a;
//     console.log(a);
//     a = 10;
//     console.log(a);
//     }
//     hoistExample();


// question2

// y = 3;
// console.log(y);
// var y;


// Write a function using hoisting by calling a variable before its declaration and observe the result.
// task 68

// add (39,89);
// function add(num1,num2){
//     console.log(num1*num2)
// }


// task 71
// const shoppingCart = [
//     { id: 1, name: 'Laptop', price: 800, quantity: 2 },
//     { id: 2, name: 'Smartphone', price: 500, quantity: 1 },
//     { id: 3, name: 'Tablet', price: 300, quantity: 3 },
//     { id: 4, name: 'Headphones', price: 50, quantity: 2 }
// ];
// // a) map Method: Calculate the total cost for each product

// const addNewArray = shoppingCart.map(([])=>{
// return (price * quantity);
// });
// console.log(addNewArray)


// b) filter Method: Filter products with a total cost greater than 1000
// c) reduce Method: Calculate the overall total cost of the shopping cart
// d) sort Method: Sort products by quantity in descending order.



