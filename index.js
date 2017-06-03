var para = document.getElementsByClassName('paragraph');
for (i = 0; i < para.length; i++) {
  para[i].style.display = 'none';
}


var caption = document.getElementsByClassName("clickable");
var i;
for (i = 0; i < caption.length; i++) {
  caption[i].onclick = function() {
    if(this.parentNode.lastElementChild.style.display === "none"){
        this.parentNode.lastElementChild.style.display = "block";
    }
    else{
      this.parentNode.lastElementChild.style.display = "none";
    }
  }
}
 
