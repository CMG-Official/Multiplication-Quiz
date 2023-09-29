correct = 0;
incorrect = 0;
max = 0;
min = 1;
moed = localStorage.getItem("gamemode");
if (moed == "EASY"){
    min = 1;
    max = 10;
}
if (moed == "MEDIUM"){
    min = 10;
    max = 30;
}
if (moed == "HARD"){
    min = 20;
    max = 100;
}
document.getElementById("typ").innerHTML = "GameMode : "+moed;
function getRandomNumber() {
   randnum1 = Math.floor(Math.random() * (max - min + 1) + min);
   randnum2 = Math.floor(Math.random() * (max - min + 1) + min);
   console.log(randnum1+" X "+randnum2);
   answer = randnum1*randnum2;
   console.log("Answer = " + answer);
   document.getElementById("qes").innerHTML = randnum1+" X "+randnum2;
}
getRandomNumber()
function nex(){
    myans = document.getElementById("area").value;
    if (myans == answer){
        correct = correct + 1;
        document.getElementById("cor").innerHTML = "Correct : "+correct;
        document.getElementById("emot").innerHTML = "✅";
        getRandomNumber();
    }
    else{
        incorrect = incorrect + 1;
        document.getElementById("incor").innerHTML = "Incorrect : "+incorrect;
        document.getElementById("emot").innerHTML = "❌";
        getRandomNumber();
    }
}
