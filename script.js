let startTime;

function checkTyping() {

let sentence = document.getElementById("sentence").innerText;
let input = document.getElementById("input").value;

if(!startTime){
startTime = new Date().getTime();
}

let currentTime = new Date().getTime();
let totalTime = (currentTime - startTime) / 1000;

document.getElementById("time").innerText = totalTime.toFixed(2);

let correctChars = 0;

for(let i=0;i<input.length;i++){
if(input[i] === sentence[i]){
correctChars++;
}
}

let accuracy = Math.round((correctChars / input.length) * 100) || 0;

document.getElementById("accuracy").innerText = accuracy;

let wordsTyped = input.trim().split(" ").length;

let speed = Math.round((wordsTyped / totalTime) * 60) || 0;

document.getElementById("speed").innerText = speed;

}

function restartTest(){

document.getElementById("input").value = "";

document.getElementById("time").innerText = "0";
document.getElementById("speed").innerText = "0";
document.getElementById("accuracy").innerText = "0";

startTime = null;

}