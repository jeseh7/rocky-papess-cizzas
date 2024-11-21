let r = 0;
let p = 1;
let s = 2;

let userChoice = prompt("Rock, Paper, or Scissors?");

let roboChoice = Math.floor(Math.random() * 2);



if (userChoice == "Rock"){
    userChoice = r;
}
else if (userChoice == "Paper"){
    userChoice = p;
}
else if (userChoice == "Scissors"){
    userChoice = s;
}
else{
    alert("Wrong input. You lose!");
}

if (userChoice == r && roboChoice == s){
    r = 4;
}
else if (roboChoice == r &&  userChoice == s){
    r = 4;
}
else{
    console.log("Nothing to see here");
}

console.log("You chose:", userChoice);
console.log("Robot chose:", roboChoice);

if (userChoice > roboChoice){
    console.log("You Win!");
}
else if (userChoice < roboChoice){
    console.log("You lose!");
}
else if (userChoice == roboChoice){
    console.log("It's a tie!");
}
else{
    console.log("Error");
}