
var username = prompt("please enter your name ");
var gender = prompt("please enter your gender (male or female) without space");

var age = prompt("how old are you ?");

var confirm = prompt("do you want to skip the welcoming message");

var qus1 = prompt("do you have asister?");

var qus2 = prompt("do you have a brother?");

var qus3 = prompt("do you enjoy drinking coffee?");



function checkgendercorrect(gender) {
   if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
      return ("gender input is not correct");
   }
}

function checkage(age) {
   if (parseInt(age) <= 0) {
      return alert("your age is small \n you can back later");
   }
}

function checkcomfirm(gender) {
   if (gender === "male") {
      return alert(`welcome Mr ${username}`);
   } else
      if (gender === "female") {
         return alert(`welcome Ms ${username}`);
      }
      else { return alert(`welcome`); }
}

function checkqus1(qus1) {
   if (qus1 === "yes" || qus1 === "no") {
       alert(`nice!`);
   } else {  alert(`invalid`); }

 return qus1 = "invalid";
}

function qus2 (qus2){
if (qus2 === "yes" || qus2 === "no") {
   alert(`nice!`)
} else {
   alert(`invalid`);
  return qus2 = "invalid";
}}

function qus3(qus3){
if (qus3 === "yes" || qus3 === "no") {
   alert(`nice!`);
} else {
   alert(`invalid`);
 return  qus3 = "invalid";
}
}

function answers(qus1, qus2 ,qus3){
let answersArr = [qus1, qus2, qus3];
answersArr.reverse();
return console.log(answersArr);
}


function checkgender(gender){
if (gender === "male") {
   alert(`welcome Mr ${username}`);
} break;
if (gender === "female") {
   alert(`welcome Ms ${username}`);

}
else { alert(`welcome`); }
}


