

function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    document.getElementById("loginForm").style.backgroundColor = color;
    document.getElementById('colorInputText').value = color;
    document.getElementById('searchform').style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}
function textResize(){
    let textSize = document.getElementById('textSlider').value;
    document.body.style.fontSize = textSize;
}
function showTime() {
    var time = Date();
    alert(time);
    document.getElementById('displayDate').value = time;
    
}