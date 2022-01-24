todo-js2
/*var username = prompt("please enter your name ");

var username = prompt("please enter your name ");

var gender = prompt("please enter your gender (male or female) without space");
if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female"){
 alert("gender input is not correct");}

 todo-js2
var age = prompt("how old are you ?");
if(parseInt(age) <=0){
    alert("your age is small \n you can back later");
}
var confirm = prompt("do you want to skip the welcoming message");

 if(gender === "male"){
    alert (`welcome Mr ${username}`);
 }
    if(gender === "female"){
    alert (`welcome Ms ${username}`);

 }
 else{ alert (`welcome`);}*/

//task6 code

function askqus(question){
   let answer = prompt(question);
   if(answer == "yes" || "no"){
      return answer;
   }else if (answe == " "){
      return "invalid";
   }
}

let qus1 = prompt("do you have asister?");
let qus2 = prompt("do you have a brother?");
let qus3 = prompt("do you enjoy drinking coffee?");

let answersArr = [qus1 ,qus2 ,qus3];

console.log(answersArr);

for(let i=0; i<answersArr.length; i++){
   console.log(answersArr);
}
let traverse = (arr) =>{
   for(let i=0; i<arr.length; i++){
      console.log(arr[i]);
   }
}




 



var age = prompt("how old are you ?");
if(parseInt(age) <=0){
    alert("your age is small \n you can back later");
}
var confirm = prompt("do you want to skip the welcoming message");
//parseInt(age) <= 0 ? alert("your age is small \n you can back later"):confirm(`welcome ${username} \n press yes to move the welcomeing message`);
//gender.toLowerCase() === "male" ? nickName : gender.toLowerCase() === "female" ?
//(nickName = "Msr") : (errorMsg = "you entered answer wrong :(");
 //errorMsg != "" ?
 if(gender === "male"){
    alert (`welcome Mr ${username}`);
 }break;
    if(gender === "female"){
    alert (`welcome Ms ${username}`);

 }
 else{ alert (`welcome`);}


//Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, 
//and if the gender input is not correct alert the welcoming message without the title, according to the confirmation

