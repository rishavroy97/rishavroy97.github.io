
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentNode.removeChild(this);
  }
}


function newElement() {
  var li = document.createElement("li");
  var Value = document.getElementById("Input").value;
  var t = document.createTextNode(Value);
  li.appendChild(t);
  if (Value !== '') {
     document.getElementById("UL").appendChild(li);
  }
  document.getElementById("Input").value = "";

  li.className = "close";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    this.parentNode.removeChild(this);
    }
  }
}