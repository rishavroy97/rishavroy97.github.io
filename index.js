function toggle(){
var parentID = document.getElementsByClassName('Topic');
var innerDiv = parentID.getElementsByClassName('para');
 if (innerDiv.style.display === 'none') {
        innerDiv.style.display = 'block';
    } else {
        innerDiv.style.display = 'none';
    }
}
