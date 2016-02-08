var timerDecrease;
var points = 0;
var toggleBtn = document.getElementById("toggleBtn");
var secondsRemaining = 20;
var clickImages = document.getElementsByTagName("img");

//Start Game
function startGame() {
  timerDecrease = setInterval(timerCountdown, 1000);
  for(var i = 0; i < clickImages.length; i++) {
  clickImages[i].addEventListener("click", countClicks)};
};

toggleBtn.addEventListener("click", startGame);

//Timer Ticks
function timerCountdown(){
  if(secondsRemaining > 0){
    document.getElementById("status").innerHTML = secondsRemaining-=1;
  } else {
    alert("times up your score is " + points)
    clearInterval(timerDecrease);
  }
}

//Count Points
  function countClicks(){
    points +=1;
    this.removeEventListener("click", countClicks);
    console.log(points);
}
