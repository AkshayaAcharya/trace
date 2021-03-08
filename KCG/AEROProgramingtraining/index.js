function revolvestart()
{
	document.getElementById("line").style.animation= "boxrotate 5s infinite linear";
	document.getElementById("knob").style.animation= "knobmove 5s infinite linear";
}

function revolvestop()
{
	document.getElementById("line").style.animation="initial";
	document.getElementById("knob").style.animation="initial";
}

var length = document.getElementById("length");
var input = document.getElementById("length");
var x=document.getElementById("length").value;
var k = Math.sqrt(x/9.8)
var result = 6.283185307179586476925286766559*k

document.getElementById("txtresult").innerHTML = result
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   console.log(x);
  }
});



