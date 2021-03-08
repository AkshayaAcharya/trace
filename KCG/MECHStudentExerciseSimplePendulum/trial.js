var Frq=0;
var intvl=null;
var frcds = 4
function start(){
    var length = document.getElementById("length").value;
    var time = Time(length);
    var frequencyHz = 1/time;
    frequencyHz === Infinity ? frequencyHz=0:null
    Frq = frequencyHz * 6.283185;
    f=Frq;
    document.getElementById("time").innerHTML = time.toFixed(frcds)+" s";
    document.getElementById("frequencyinrad").innerHTML = Frq.toFixed(frcds)+" rad/sec";
    document.getElementById("frequencyinhz").innerHTML = frequencyHz.toFixed(frcds)+" Hz";
    document.getElementsByClassName("line")[0].style.animation = `tofro ${time*2}s ease-in-out infinite`;
    var x=0;
if(intvl!=null){
  clearInterval(intvl);
}
intvl = setInterval(function(){
	waveX(x);
	x++;
	if(x>w){
    x=0;
  }
},50);
}

function Time(length) {
    return 2*(22/7)*(Math.sqrt(length/(9.80665*100)))
}

var c = document.getElementById("wave");
var cntxt = c.getContext("2d");
var w=c.width;
var h=c.height/2;
function waveY(x) {
	return h - h * Math.sin( x * 2 * Math.PI * (f/w) );
}
function waveX(x){
	cntxt.clearRect(0, 0, w, h*2);

  cntxt.beginPath();
  cntxt.strokeStyle = "#080808";
  cntxt.moveTo(0,h);
  cntxt.lineTo(w,h);
  cntxt.stroke();

  cntxt.beginPath();
  cntxt.moveTo(0,h);
  cntxt.strokeStyle = "rgba(0,0,0,0)";
  for(var i=0;i<x;i++){
    var y = waveY(x);
  	cntxt.moveTo(i,y);
    cntxt.lineTo(x,y);
  }
  cntxt.stroke();
  cntxt.beginPath(); c
  cntxt.strokeStyle = "rgba(0,0,0,0)";
  for(var i=0;i<x;i++){
    var y = waveY(x);
    cntxt.moveTo(x,h);
    cntxt.lineTo(x,y);
  }
  cntxt.stroke();


  cntxt.beginPath();
  cntxt.strokeStyle = "#e80909";
  for(var i=0;i<x;i++){
    var y = waveY(i);
    cntxt.lineTo(i,y);
  }
  cntxt.stroke();
}

function stop() {
    document.getElementsByClassName("line")[0].style.animation = "";
    if(intvl!=null){
        clearInterval(intvl);
      }
}

function stop() {
    document.getElementsByClassName("line")[0].style.animation = "";
    if(intvl!=null){
        clearInterval(intvl);
      }
}
