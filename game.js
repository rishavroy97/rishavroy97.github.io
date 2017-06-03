var clicks = 0;
var points = 0;
var timer = null, interval = 150;

function rand_num(){
  var slots = document.getElementsByClassName("Slot");
  var i;
  for (i=0;i<slots.length;i++){
    slots[i].innerHTML =  Math.floor(Math.random()*3); 
    }
}

function spin() {
  
  if (timer !== null) return;
  
  clicks += 1;
  document.getElementById("trials").innerHTML = clicks;
  timer = setInterval(rand_num, interval); 
}

function stop() {
  clearInterval(timer);
  timer = null
  
  var slots = document.getElementsByClassName("Slot");
  
  if((slots[0].innerHTML === slots[1].innerHTML) && (slots[1].innerHTML === slots[2].innerHTML)){
    console.log("!");
    points += 100;
    document.getElementById("scores").innerHTML = points;
  }
}

function restart(){
  
  if (timer !== null) return;
  
  var slots = document.getElementsByClassName("Slot");
  var i;
  for (i=0;i<slots.length;i++){
    slots[i].innerHTML = "0"; 
    }
  clicks = 0;
  points = 0;
  document.getElementById("trials").innerHTML =clicks;
  document.getElementById("scores").innerHTML = points;
}