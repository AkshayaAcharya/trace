var result=0;
var f=0;
var intvl=null;


var input = document.getElementById("length");
input.addEventListener("keyup", function(event) 
{
	if (event.keyCode === 13) 
	{
   		event.preventDefault();
   		document.getElementById("myBtn").click();
  	}
});

function revolvestart()
{
if (result!=0)
{
	document.getElementById("line").style.animation= "boxrotate infinite linear";
	document.getElementById("line").style.animationDuration=result.toString().concat('s');
	document.getElementById("knob").style.animation= "knobmove infinite linear";
	document.getElementById("knob").style.animationDuration=result.toString().concat('s');

	
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
else
{
	alert("Please enter length first!");}
}

function revolvestop()
{
	document.getElementById("line").style.animation="initial";
	document.getElementById("knob").style.animation="initial";
	 if(intvl!=null){
        clearInterval(intvl);
      }

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





function CalculateTime()
{
	var len=document.getElementById("length").value;

	var g=9.8;
	if (len>=1000 && len<=2000)
	{
		
		result=2*Math.PI*(Math.sqrt(len*0.001/g));
		document.getElementById("timeperiod").style.display='block';
		document.getElementById("timeperiod").innerHTML="Time period(&Tau;): "+result.toFixed(4)+"s";
		document.getElementById("freqinRads").style.display='block';
		document.getElementById("freqinRads").innerHTML="Natural Frequency(rad/s): "+((1/result)*6.28).toFixed(4)+"rad/sec";
		f=((1/result)*6.28).toFixed(4);
		document.getElementById("freqinHz").style.display='block';
		document.getElementById("freqinHz").innerHTML="Natural Frequency(Hz): "+(1/result).toFixed(4)+"Hz";
	}
	else
	{
		alert("Please enter the value between 1000mm and 2000mm");
	}

}






