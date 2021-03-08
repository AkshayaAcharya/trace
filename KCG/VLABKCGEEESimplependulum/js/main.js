var frequencyRad=0;
var interval=null;
var fractionDigits = 4
function changeLength(){
    var length = document.getElementById("length-input").value;
    var time = calculateTime(length);
    var frequencyHz = 1/time;
    frequencyHz === Infinity ? frequencyHz=0:null
    frequencyRad = frequencyHz * 6.283185;
    f=frequencyRad;
    document.getElementById("time-display").innerHTML = time.toFixed(fractionDigits)+" s";
    document.getElementById("frequency-rad-display").innerHTML = frequencyRad.toFixed(fractionDigits)+" rad/sec";
    document.getElementById("frequency-hz-display").innerHTML = frequencyHz.toFixed(fractionDigits)+" Hz";  
    document.getElementsByClassName("thread")[0].style.animation = `oscillate ${time*2}s ease-in-out infinite`;
    var x=0;
if(interval!=null){
  clearInterval(interval);
}      
interval = setInterval(function(){
	drawSine(x);
	x++; 
	if(x>w){
    x=0;
  }
},20); //Time in miliseconds
}

function calculateTime(length) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var c = document.getElementById("canvas"); 
var ctx = c.getContext("2d"); 
var w=c.width; 
var h=c.height/2; 
// var f=10.555876818024912 ; 
function calcSineY(x) {
	return h - h * Math.sin( x * 2 * Math.PI * (f/w) );
}
function drawSine(x){
	ctx.clearRect(0, 0, w, h*2);
  
  ctx.beginPath(); 
  ctx.strokeStyle = "#ff0000"; 
  ctx.moveTo(0,h); 
  ctx.lineTo(w,h); 
  ctx.stroke(); 
  
  ctx.beginPath(); 
  ctx.moveTo(0,h); 
  ctx.strokeStyle = "rgba(0,0,0,0)"; 
  for(var i=0;i<x;i++){ 
    var y = calcSineY(x); 
  	ctx.moveTo(i,y); 
    ctx.lineTo(x,y); 
  }
  ctx.stroke();  
  ctx.beginPath(); c
  ctx.strokeStyle = "rgba(0,0,0,0)"; 
  for(var i=0;i<x;i++){ 
    var y = calcSineY(x); 
    ctx.moveTo(x,h); 
    ctx.lineTo(x,y); 
  }
  ctx.stroke(); 
    
  
  ctx.beginPath(); 
  ctx.strokeStyle = "#6a0dad"; 
  for(var i=0;i<x;i++){ 
    var y = calcSineY(i); 
    ctx.lineTo(i,y); 
  }
  ctx.stroke(); 
}

function stop() {
    document.getElementsByClassName("thread")[0].style.animation = "";
    if(interval!=null){
        clearInterval(interval);
      }
}

function stop() {
    document.getElementsByClassName("thread")[0].style.animation = "";
    if(interval!=null){
        clearInterval(interval);
      }
}