
var username = prompt("please enter your name ");
var gender = prompt("please enter your gender (male or female) without space");
if(gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female"){
 alert("gender input is not correct");}

var age = prompt("how old are you ?");
if(parseInt(age) <=0){
    alert("your age is small \n you can back later");
}
var confirm = prompt("do you want to skip the welcoming message");
 if(gender === "male"){
    alert (`welcome Mr ${username}`);
 }else
    if(gender === "female"){
    alert (`welcome Ms ${username}`);
 }
 else{ alert (`welcome`);}

 var qus1 = prompt("do you have asister?");
 if(qus1 === "yes" || qus1 === "no"){
alert(`nice!`);
 }else{alert(`invalid`);
qus1 = "invalid";
}
 var qus2 = prompt("do you have a brother?");
 if(qus2 === "yes" || qus2 === "no"){
alert(`nice!`)
}else{alert(`invalid`);
qus2 = "invalid";
}
  var qus3 = prompt("do you enjoy drinking coffee?");
  if(qus3 === "yes" || qus3 === "no"){
alert(`nice!`);
}else{alert(`invalid`);
qus3 = "invalid";
}

 //function askqus(question){
   //let answer = prompt(question);
   //if(answer == "yes" || "no"){
     // return answer;
   //}else if (answe == " "){
     // return prompt("invalid");
   //}
//}

 let answersArr = [qus1 ,qus2 ,qus3];

answersArr.reverse();

console.log(answersArr);

 





 



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

