
// calculateage

const getAge = (birthYear)=>{
const date = new Date().getFullYear();
return date-birthYear;    
};
const age=getAge(2002);
console.log(age);