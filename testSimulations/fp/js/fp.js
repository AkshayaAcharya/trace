var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
var n=0;
var count=0;
var time=0;
var f1=0,f2=0,f3=0,favg=0;

var dia=0;

//Variables
var idInput = null, checkUnit = null, textDisplay = null;
var compareVal = 0, qCount = 0, resultCount = 0 ;
var ansDisplay = 0;
var HVal = 0;
var qVal = 0;
var vVal = 0;
var fVal = 0;


//To insert input and check button
function userCalculation(elem)
{
	ansDisplay++;
	var inputVal = document.createElement("input");
	var checkVal = document.createElement("input");
	var rightVal = document.createElement("span");
	inputVal.setAttribute("type","text");
	inputVal.setAttribute("id","res"+ansDisplay);
	rightVal.setAttribute("id","rightAns"+ansDisplay);
	inputVal.classList.add("inputStyle");
	checkVal.setAttribute("type","button");
	checkVal.setAttribute("id","chk"+ansDisplay);
	checkVal.setAttribute("style","cursor:pointer");
	checkVal.setAttribute("onclick","checkResult();");
	checkVal.setAttribute("value","CHECK");
	elem.appendChild(inputVal);
	elem.appendChild(rightVal);
	elem.appendChild(checkVal);
	// elem.appendChild(document.getElementById("formula"));
	// document.getElementById("formula").appendChild(document.getElementById("formulaContent"));
	// elem.setAttribute("onmouseover","formulaDisplay(event,this);");
	// elem.setAttribute("onmouseout","formulaDisplayClose();");
}
function checkResult()
{
	var idd = document.getElementById("res"+ansDisplay);
	var idd1 = document.getElementById("chk"+ansDisplay);
	var ansId = document.getElementById("rightAns"+ansDisplay);
	// if(simsubscreennum == 4)
	// {
	// 	compareVal = values[lnt][8];
	// 	checkUnit = "m<sup>3</sup>/sec";
	// }
	if(simsubscreennum == 5)
	{
		compareVal = HVal;
		checkUnit = "cm";
	}
	
	else if(simsubscreennum == 7 && resultCount == 0)
	{
		compareVal = qVal;
		checkUnit = "cm<sup>3</sup>/sec";
	}
	else if(simsubscreennum == 7 && resultCount == 1)
	{
		compareVal = vVal;
		checkUnit = "cm/sec";
	}
	else if(simsubscreennum == 7 && resultCount == 2)
	{
		compareVal = fVal;
		checkUnit = "";
	}
	
	if(!idd.value  || !idd.value!=" ")
	{
		// idd.setAttribute("placeholder","Please enter value");
	}
	// else if(Math.round(idd.value) != Math.round(compareVal))
	else if(((Math.floor(idd.value * 10000)/10000) != (Math.floor(compareVal * 10000)/10000)) || ((Math.floor(idd.value * 1000)/1000) != (Math.floor(compareVal * 1000)/1000)) || ((Math.floor(idd.value * 100)/100) != (Math.floor(compareVal * 100)/100)) || ((Math.floor(idd.value * 10)/10) != (Math.floor(compareVal * 10)/10)))
	{
		// console.log(2);
		qCount++;
		// blinkStop();
		ansId.classList.remove("resultStyle");
		idd.style.borderColor = "red";
		ansId.style.color = "red";
		ansId.innerHTML= "&#10008;";
		if(qCount == 2)
		{
			idd1.value = "RESULT";
		}
		if(qCount == 3)
		{
			idd1.style.visibility = "hidden";
			idd.parentNode.removeChild(idd);
			idd1.parentNode.removeChild(idd1);
			ansId.classList.add("resultStyle");
			ansId.style.color = "black";
			ansId.innerHTML= (Math.floor(compareVal * 10000)/10000)+checkUnit;
			goToNextFunction();
		}
	}
	else
	{
		idd1.style.visibility = "hidden";
		idd.parentNode.removeChild(idd);
		idd1.parentNode.removeChild(idd1);
		ansId.classList.add("resultStyle");
		ansId.style.color = "black";
		ansId.innerHTML= (Math.floor(compareVal * 10000)/10000)+checkUnit+"<span style='color:green;font-size:20px;'>&#10004;</span>";
		goToNextFunction();
	}
}
function goToNextFunction()
{
	// if(simsubscreennum == 4)
	// {
	// 	qCount = 0;
	// 	document.getElementById("nextButton").style.visibility = "visible";
	// }
	// else 
	if(simsubscreennum == 5)
	{
		qCount = 0;
		document.getElementById("nextButton").style.visibility = "visible";
	}
	else if(simsubscreennum == 7 && resultCount == 0)
	{
		resultCount = 1;
		qCount = 0;
		switch(dia) {
			case "50mm": vVal = m50[5][p];
						break;
			case "40mm": vVal = m40[5][p];
						break;
			case "25mm": vVal = m25[5][p];
						break;
			case "20mm": vVal = m20[5][p];
			 			break;	
			case "15mm": vVal = m15[5][p];
						break;
		}
		document.getElementById('75').style.visibility="visible";
		document.getElementById('75').innerHTML = "Velocity (v) = ";
		idInput = document.getElementById('75');
		userCalculation(idInput);
	}
	else if(simsubscreennum == 7 && resultCount == 1)
	{
		resultCount = 2;
		qCount = 0;
		switch(dia) {
			case "50mm": fVal = m50[6][p];
						break;
			case "40mm": fVal = m40[6][p];
						break;
			case "25mm": fVal = m25[6][p];
						break;
			case "20mm": fVal = m20[6][p];
			 			break;	
			case "15mm": fVal = m15[6][p];
						break;
		}
		document.getElementById('76').style.visibility="visible";
		document.getElementById('76').innerHTML = "Analytical Friction Factor (f) =  ";
		idInput = document.getElementById('76');
		userCalculation(idInput);
	}
	else if(simsubscreennum == 7 && resultCount == 2)
	{
		qCount = 0;
		resultCount = 0;
		step7Next();
	}
}


function navNext()
{

     for (temp = 0; temp <= 7; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;
     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";

     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arr').style.visibility=="hidden")
         document.getElementById('arr').style.visibility="visible";
     else
         document.getElementById('arr').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arr').style.visibility="hidden";
}


function animateclose()
{
     if (document.getElementById('close').style.visibility=="hidden")
         document.getElementById('close').style.visibility="visible";
     else
         document.getElementById('close').style.visibility="hidden";
}


function myStopFunctionclose() 
{
     clearInterval(myInt);
     document.getElementById('close').style.visibility="hidden";
}

//-----------------------------Select tag--------------------------
$(document).ready(function() {

	
	$("select").change(function(){
  		
  				dia=$(this).val();
            $('#s1').text("Diameter of the pipe = "+dia);
            $('#s2').text("Length of the pipe = 3m");
            document.getElementById('pipe').disabled="true";
				document.getElementById('select').style.visibility="hidden";
				document.getElementById('s1').style.visibility="visible";
				document.getElementById('s2').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
				
 
		});
});





//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	
	
	if (simsubscreennum==1)
	{  
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('select').style.visibility="visible";
		 document.getElementById('select').style.animation = "pipe 1.0s 1 forwards "
		 
    }
	
	
	else if (simsubscreennum==2)
	{
		 p=Math.floor(Math.random() * (max - min + 1) ) + min;	
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('s1').style.visibility="hidden";
		 document.getElementById('s2').style.visibility="hidden";
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
			 if(dia=="50mm")
			 {
		     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 125px; top:95px; height: 30px; z-index: 10;";
			 document.getElementById('close2').style.visibility="visible";
		     document.getElementById('close3').style.visibility="visible";
		     document.getElementById('close4').style.visibility="visible";
		     document.getElementById('close5').style.visibility="visible";
			 }
			 else if(dia=="40mm")
			 {
			  document.getElementById('arr').style="visibility:visible ;position:absolute; left: 125px; top:190px; height: 30px; z-index: 10;";
			 document.getElementById('close1').style.visibility="visible";
		     document.getElementById('close3').style.visibility="visible";
		     document.getElementById('close4').style.visibility="visible";
		     document.getElementById('close5').style.visibility="visible";
			 }
			 else if(dia=="25mm")
			 {
			  document.getElementById('arr').style="visibility:visible ;position:absolute; left: 125px; top:290px; height: 30px; z-index: 10;";
			  document.getElementById('close1').style.visibility="visible";
		     document.getElementById('close2').style.visibility="visible";
		     document.getElementById('close4').style.visibility="visible";
		     document.getElementById('close5').style.visibility="visible";
			  
			 }
			 else if(dia=="20mm")
			 {
			 document.getElementById('arr').style="visibility:visible ;position:absolute; left: 130px; top:385px; height: 30px; z-index: 10;";
			 document.getElementById('close1').style.visibility="visible";
		     document.getElementById('close2').style.visibility="visible";
		     document.getElementById('close3').style.visibility="visible";
		     document.getElementById('close5').style.visibility="visible";
			 }
			 else if(dia=="15mm")
			 {
			  document.getElementById('arr').style="visibility:visible ;position:absolute; left: 130px; top:480px; height: 30px; z-index: 10;";
			  document.getElementById('close1').style.visibility="visible";
		     document.getElementById('close2').style.visibility="visible";
		     document.getElementById('close3').style.visibility="visible";
		     document.getElementById('close4').style.visibility="visible";
			 }
		     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
		     document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
		     document.getElementById("arr").style.transform = "rotate(35deg)";
			 if(dia=="50mm")
			 {
	         document.getElementById('n50').onclick=function(){step2();}
			 }
			 else if(dia=="40mm")
			 {
			 document.getElementById('n40').onclick=function(){step2();}
			 }
			 else if(dia=="25mm")
			 {
	         document.getElementById('n25').onclick=function(){step2();}				 
			 }
			 else if(dia=="20mm")
			 {
	         document.getElementById('n20').onclick=function(){step2();}				 
			 }
			 else if(dia=="15mm")
			 {
	         document.getElementById('n15').onclick=function(){step2();}
				 
			 }
		 },700);
		 
    }
	
	else if (simsubscreennum==3)
	{
		repeat+=1;
	 if(dia=="50mm")
	 {
	 if(repeat==1)
	 	f1=m50[6][p];
	 else if(repeat==2)
	 	f2=m50[6][p];
	 else if(repeat==3)
		f3=m50[6][p];
	 }
	 else if(dia=="40mm")
	 {
	 if(repeat==1)
	 	f1=m40[6][p];
	 else if(repeat==2)
	 	f2=m40[6][p];
	 else if(repeat==3)
		f3=m40[6][p];
	 }
	else if(dia=="25mm")
	 {
	 if(repeat==1)
	 	f1=m25[6][p];
	 else if(repeat==2)
	 	f2=m25[6][p];
	 else if(repeat==3)
		f3=m25[6][p];
	 }
	else if(dia=="20mm")
	 {
	 if(repeat==1)
	 	f1=m20[6][p];
	 else if(repeat==2)
	 	f2=m20[6][p];
	 else if(repeat==3)
		f3=m20[6][p];
	 }
	 else if(dia=="15mm")
	 {
	 if(repeat==1)
	 	f1=m15[6][p];
	 else if(repeat==2)
	 	f2=m15[6][p];
	 else if(repeat==3)
		f3=m15[6][p];
	 }
	 p=Math.floor(Math.random() * (max - min + 1) ) + min;	
	 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
	 document.getElementById('trial').innerHTML="Trial : " + repeat;
		if(repeat>1 && repeat<4)
	 {
		refresh();
		document.getElementById('31').style.visibility="visible";
		document.getElementById('nob3').style.visibility="visible";
		document.getElementById('meter').style.visibility="visible";
		
		document.getElementById('71').style.visibility="hidden";
		document.getElementById('73').style.visibility="hidden";
		document.getElementById('73c').style.visibility="hidden";
		document.getElementById('73d').style.visibility="hidden";
		document.getElementById('73a').style.visibility="hidden";
		document.getElementById('73b').style.visibility="hidden";
		document.getElementById('74').style.visibility="hidden";
		document.getElementById('75').style.visibility="hidden";
		document.getElementById('76').style.visibility="hidden";
		document.getElementById('canvas7').style.visibility="hidden";
		
	 }
	
     document.getElementById('close1').style.visibility="hidden";
	 document.getElementById('close2').style.visibility="hidden";
     document.getElementById('close3').style.visibility="hidden";
     document.getElementById('close4').style.visibility="hidden";
     document.getElementById('close5').style.visibility="hidden";                             
	 document.getElementById('pole1').style.visibility="hidden";
	 document.getElementById('hv').style.visibility="hidden";
     document.getElementById('nextButton').style.visibility="hidden"; 
	 myInt = setInterval(function(){ animatearrow(); }, 500);
	 document.getElementById('arr').style="visibility:visible ;position:absolute;  left: 190px; top: 430.75px;  height: 30px; z-index: 10;";
	 document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
     document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	 document.getElementById("arr").style.transform = "rotate(35deg)";
     document.getElementById('nob3').onclick=function(){step3();}
	}
	else if (simsubscreennum==4)
	{
		if(repeat>1 && repeat<4)
	 {
		
		document.getElementById('meter4').style.visibility="visible";
		document.getElementById('tap0').style.visibility="visible";	
	 }
		document.getElementById('mn2').style.visibility="hidden";
		document.getElementById('b3').style.visibility="hidden";
		document.getElementById('b4').style.visibility="hidden";
		document.getElementById('31').style.visibility="hidden";
		document.getElementById('p2').style.visibility="hidden";
		if(document.getElementById('31a').style.visibility=="visible")
		{
			document.getElementById('31a').style.visibility="hidden";
			document.getElementById('41a').style.visibility="visible";
		}
		else
		{
		 document.getElementById('31a').style.visibility="hidden";
		}
		if(document.getElementById('31b').style.visibility=="visible")
		{
			document.getElementById('31b').style.visibility="hidden";
			document.getElementById('41b').style.visibility="visible";
		}
		else
		{
		 document.getElementById('31b').style.visibility="hidden";
		}
		if(document.getElementById('31c').style.visibility=="visible")
		{
			document.getElementById('31c').style.visibility="hidden";
			document.getElementById('41c').style.visibility="visible";
		}
		else
		{
		 document.getElementById('31c').style.visibility="hidden";
		}
		if(document.getElementById('31d').style.visibility=="visible")
		{
			document.getElementById('31d').style.visibility="hidden";
			document.getElementById('41d').style.visibility="visible";
		}
		else
		{
		 document.getElementById('31d').style.visibility="hidden";
		}
		if(document.getElementById('31e').style.visibility=="visible")
		{
			document.getElementById('31e').style.visibility="hidden";
			document.getElementById('41e').style.visibility="visible";
		}
		else
		{
		 document.getElementById('31e').style.visibility="hidden";
		}
		
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 370.5px; top:193.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		 document.getElementById('pv2').style.visibility="hidden";	
         document.getElementById('meter4').onclick=function(){step41();}
	 
		
	}
	else if (simsubscreennum==5)
	{
		if(repeat>1 && repeat<4)
	 {
		
		document.getElementById('wr1').style.visibility="visible";
		document.getElementById('wr2').style.visibility="visible";	
		document.getElementById('mano').style.visibility="visible";	
		document.getElementById('lw').style.visibility="visible";	
		document.getElementById('rw').style.visibility="visible";	
		document.getElementById('hl').style.visibility="visible";	
	 }
		document.getElementById('41a').style.visibility="hidden";
		document.getElementById('41b').style.visibility="hidden";
		document.getElementById('41c').style.visibility="hidden";
		document.getElementById('41d').style.visibility="hidden";
		document.getElementById('41e').style.visibility="hidden";
		document.getElementById('flow').style.visibility="hidden";
		if(dia=="50mm")
		{
		document.getElementById('5a').style.visibility="visible";		
		}
		else if(dia=="40mm")
		{
		document.getElementById('5b').style.visibility="visible";

		}
	    else if(dia=="25mm")
		{
		document.getElementById('5c').style.visibility="visible";	

		}
	    else if(dia=="20mm")
		{
		document.getElementById('5d').style.visibility="visible";

		}
	    else if(dia=="15mm")
		{
		document.getElementById('5e').style.visibility="visible";
		}	
        document.getElementById('wr1').style.transformOrigin="100% 80%";
		document.getElementById('wr1').style.animation="water-1 2.5s 1 forwards";
		
		document.getElementById('wr2').style.transformOrigin="100% 80%";
		document.getElementById('wr2').style.animation="water-1 2.5s 1 forwards";
		
		setTimeout(function()
		{
			
			if(dia=="50mm")
			{
				document.getElementById('lw').innerHTML="Left Limb Reading (LL)&nbsp=&nbsp"+m50[0][p]+"cm";
				document.getElementById('rw').innerHTML="Right Limb Reading (RL)&nbsp=&nbsp"+m50[1][p]+"cm";
				HVal = m50[3][p];
				document.getElementById('hl').innerHTML="Head Loss (H) = ";
				setTimeout(function(){
					idInput = document.getElementById('hl');
					userCalculation(idInput);
				}, 1000);
			// document.getElementById('hl').innerHTML="Head Loss(hl=12.6*(LL- RL))=&nbsp"+m50[3][p]+"cm";
			}
			else if(dia=="40mm")
			{

				document.getElementById('lw').innerHTML="Left Limb Reading (LL)&nbsp=&nbsp"+m40[0][p]+"cm";
				document.getElementById('rw').innerHTML="Right Limb Reading (RL)&nbsp=&nbsp"+m40[1][p]+"cm";
				HVal = m40[3][p];
				document.getElementById('hl').innerHTML="Head Loss (H) = ";
				setTimeout(function(){
					idInput = document.getElementById('hl');
					userCalculation(idInput);
				}, 1000);
				// document.getElementById('hl').innerHTML="Head Loss(hl=12.6*(LL- RL))&nbsp=&nbsp"+m40[3][p]+"cm";
			}
			else if(dia=="25mm")
			{
			document.getElementById('lw').innerHTML="Left Limb Reading (LL)&nbsp=&nbsp"+m25[0][p]+"cm";
			document.getElementById('rw').innerHTML="Right Limb Reading (RL)&nbsp=&nbsp"+m25[1][p]+"cm";
			HVal = m25[3][p];
			document.getElementById('hl').innerHTML="Head Loss (H) = ";
			setTimeout(function(){
				idInput = document.getElementById('hl');
				userCalculation(idInput);
			}, 1000);
			// document.getElementById('hl').innerHTML="Head Loss(hl=12.6*(LL- RL))&nbsp=&nbsp"+m25[3][p]+"cm";
			}
			else if(dia=="20mm")
			{
			document.getElementById('lw').innerHTML="Left Limb Reading (LL)&nbsp=&nbsp"+m20[0][p]+"cm";
			document.getElementById('rw').innerHTML="Right Limb Reading (RL)&nbsp=&nbsp"+m20[1][p]+"cm";
			HVal = m20[3][p];
			document.getElementById('hl').innerHTML="Head Loss (H) = ";
			setTimeout(function(){
				idInput = document.getElementById('hl');
				userCalculation(idInput);
			}, 1000);
			// document.getElementById('hl').innerHTML="Head Loss(hl=12.6*(LL- RL))&nbsp=&nbsp"+m20[3][p]+"cm";
			}
			else if(dia=="15mm")
			{
			document.getElementById('lw').innerHTML="Left Limb Reading (LL)&nbsp=&nbsp"+m15[0][p]+"cm";
			document.getElementById('rw').innerHTML="Right Limb Reading (RL)&nbsp=&nbsp"+m15[1][p]+"cm";
			HVal = m15[3][p];
			document.getElementById('hl').innerHTML="Head Loss (H) = ";
			setTimeout(function(){
				idInput = document.getElementById('hl');
				userCalculation(idInput);
			}, 1000);
			// document.getElementById('hl').innerHTML="Head Loss(hl=12.6*(LL- RL))&nbsp=&nbsp"+m15[3][p]+"cm";
			}
		},1500);
		
  	}
	else if (simsubscreennum==6)
	{
		if(repeat>1 && repeat<4)
	 {

		document.getElementById('tap6').style.visibility="visible";	
		document.getElementById('flow6').style.visibility="visible";	
	 }
		
		document.getElementById('lw').style.visibility="hidden";
		document.getElementById('rw').style.visibility="hidden";
		document.getElementById('hl').style.visibility="hidden";
		document.getElementById('mano').style.visibility="hidden";
		document.getElementById('wr1').style.visibility="hidden";
		document.getElementById('wr2').style.visibility="hidden";
		document.getElementById('5a').style.visibility="hidden";
		document.getElementById('5b').style.visibility="hidden";
		document.getElementById('5c').style.visibility="hidden";
		document.getElementById('5d').style.visibility="hidden";
		document.getElementById('5e').style.visibility="hidden";
		
		
     	document.getElementById('wr4').style.visibility="visible";
		document.getElementById('mtube').style.visibility="visible";
		document.getElementById('swatch').style.visibility="visible";
		document.getElementById('needle').style.visibility="visible";		
		

		if(dia=="50mm")
		{
		document.getElementById('6a').style.visibility="visible";		
		}
		else if(dia=="40mm")
		{
		document.getElementById('6b').style.visibility="visible";

		}
	    else if(dia=="25mm")
		{
		document.getElementById('6c').style.visibility="visible";	

		}
	    else if(dia=="20mm")
		{
		document.getElementById('6d').style.visibility="visible";

		}
	    else if(dia=="15mm")
		{
		document.getElementById('6e').style.visibility="visible";
		}
		
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 405.5px; top:315px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(-215deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(-215deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(-215deg)";
		
		 document.getElementById('mn4').style.visibility="hidden";
		 document.getElementById('c5').style.visibility="hidden";
		 document.getElementById('c6').style.visibility="hidden";
		 document.getElementById('meter4').style.visibility="hidden";
         document.getElementById('tap6').onclick=function(){step6();}
		
		
		
	}
	else if (simsubscreennum==7)
	{			
	   document.getElementById('6a').style.visibility="hidden";
		document.getElementById('6b').style.visibility="hidden";
		document.getElementById('6c').style.visibility="hidden";
		document.getElementById('6d').style.visibility="hidden";
		document.getElementById('6e').style.visibility="hidden";
		
		document.getElementById('mtube').style.visibility="hidden";
		document.getElementById('swatch').style.visibility="hidden";
		document.getElementById('needle').style.visibility="hidden";
		document.getElementById('wr4').style.visibility="hidden";
		document.getElementById('ir').style.visibility="hidden";
		document.getElementById('dif').style.visibility="hidden";
		document.getElementById('fr').style.visibility="hidden";
		document.getElementById('time').style.visibility="hidden";
		
		document.getElementById('71').style.visibility="visible";
		document.getElementById('72').innerHTML="Diameter of pipe (d) = "+dia;
		document.getElementById('73').style.visibility="visible";
		document.getElementById('73c').style.visibility="visible";
		document.getElementById('73d').style.visibility="visible";
		document.getElementById('74').style.visibility="visible";
		document.getElementById('75').style.visibility="visible";
		document.getElementById('76').style.visibility="visible";
		if(dia=="50mm")
		{
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73b').style.visibility="visible";
			document.getElementById('73a').innerHTML="Head Loss (H)=&nbsp"+m50[3][p].toFixed(2)+"cm";
			document.getElementById('73b').innerHTML="Time taken (t)=&nbsp"+m50[2][p].toFixed(2)+"sec";
			qVal = m50[4][p];
			document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
			idInput = document.getElementById('74');
			userCalculation(idInput);
		}
		else if(dia=="40mm")
		{
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73b').style.visibility="visible";
			document.getElementById('73a').innerHTML="Head Loss (H)=&nbsp"+m40[3][p].toFixed(2)+"cm";
			document.getElementById('73b').innerHTML="Time taken (t)=&nbsp"+m40[2][p].toFixed(2)+"sec";
			qVal = m40[4][p];
			document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
			idInput = document.getElementById('74');
			userCalculation(idInput);
			
		}
		else if(dia=="25mm")
		{
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73b').style.visibility="visible";
			document.getElementById('73a').innerHTML="Head Loss (H)=&nbsp"+m25[3][p].toFixed(2)+"cm";
			document.getElementById('73b').innerHTML="Time taken (t)=&nbsp"+m25[2][p].toFixed(2)+"sec";
			qVal = m25[4][p];
			document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
			idInput = document.getElementById('74');
			userCalculation(idInput);
		
		}
		else if(dia=="20mm")
		{
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73b').style.visibility="visible";
			document.getElementById('73a').innerHTML="Head Loss (H)=&nbsp"+m20[3][p].toFixed(2)+"cm";
			document.getElementById('73b').innerHTML="Time taken (t)=&nbsp"+m20[2][p].toFixed(2)+"sec";
			qVal = m20[4][p];
			document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
			idInput = document.getElementById('74');
			userCalculation(idInput);
		
		}
		else if(dia=="15mm")
		{
			document.getElementById('73a').style.visibility="visible";
			document.getElementById('73b').style.visibility="visible";
			document.getElementById('73a').innerHTML="Head Loss (H)=&nbsp"+m15[3][p].toFixed(2)+"cm";
			document.getElementById('73b').innerHTML="Time taken (t)=&nbsp"+m15[2][p].toFixed(2)+"sec";
			qVal = m15[4][p];
			document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
			idInput = document.getElementById('74');
			userCalculation(idInput);
		}
		
		
		
	}
	
	// else if(simsubscreennum==8)
	// {
		// document.getElementById('71').style.visibility="hidden";
		// document.getElementById('72').style.visibility="hidden";
		// document.getElementById('73').style.visibility="hidden";
		// document.getElementById('74').style.visibility="hidden";
		// document.getElementById('75').style.visibility="hidden";
		// document.getElementById('76').style.visibility="hidden";
		// document.getElementById('step8text1').onclick=function() { step8();}
	// }
}

function step7Next () {
	if(repeat>=1 && repeat<3)
	{
		simsubscreennum=2;
		document.getElementById("nextButton").style.visibility="visible";
	}
	else if(repeat==3)
	{
		favg=(f1+f2+f3)/3.0;
		document.getElementById("77").style.visibility="visible";
		document.getElementById("77").innerHTML="Average Analytical Friction Factor (f)&nbsp=<span class='resultStyle'>&nbsp"+favg.toFixed(2)+"&nbsp</span>";
		document.getElementById("nextButton").style.visibility="hidden";	
	}
}

    
	

	function step2()
	{
		myStopFunction();
		document.getElementById('arr').style.visibility="hidden";
		document.getElementById('pole1').style.visibility="visible";
		document.getElementById('hv').style.visibility="visible";
		document.getElementById('hv').style.transformOrigin="13% 14%";
		document.getElementById('hv').style.animation="pipes-2 1.2s 1 forwards";
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	
	function step3()
	{
		myStopFunction();
		document.getElementById('nob3').style.visibility="hidden";
		setTimeout(function()
		{
		 document.getElementById('pole2').style.visibility="visible";
		 document.getElementById('hv3').style.visibility="visible";
		 document.getElementById('hv3').style.transformOrigin="13% 14%";
		 document.getElementById('hv3').style.animation="pipes-2 1.2s 1 forwards";
		},1500);
		setTimeout(function()
		{
		 if(dia=="50mm")
		 {
			 		document.getElementById('31a').style.visibility="visible";
					document.getElementById('circle').style.left="235.5px";
			 		document.getElementById('circle').style.top="130px";
				    document.getElementById('arr').style="position:absolute; left: 260.5px; top:150px; height: 30px; z-index: 10;";

		 }

       else if(dia=="40mm")
		 {
			 		document.getElementById('31b').style.visibility="visible";
					document.getElementById('circle').style.left="235.5px";
			 		document.getElementById('circle').style.top="180px";
					document.getElementById('arr').style="position:absolute; left: 260.5px; top:210px; height: 30px; z-index: 10;";

		 }
         else if(dia=="25mm")
		 {

		 		document.getElementById('31c').style.visibility="visible";
				document.getElementById('circle').style.left="235.5px";
			 	document.getElementById('circle').style.top="230px";
				document.getElementById('arr').style="position:absolute; left: 260.5px; top:260px; height: 30px; z-index: 10;";


		 }
         else if(dia=="20mm")
		 {
			 		document.getElementById('31d').style.visibility="visible";
					document.getElementById('circle').style.left="235.5px";
			 		document.getElementById('circle').style.top="280px";
			        document.getElementById('arr').style="position:absolute; left: 262.5px; top:310px; height: 30px; z-index: 10";


		 }
         else if(dia=="15mm")
		 {
			 		document.getElementById('31e').style.visibility="visible";
					document.getElementById('circle').style.left="235.5px";
			 		document.getElementById('circle').style.top="330px";
					document.getElementById('arr').style="position:absolute; left: 266.5px; top:360px; height: 30px; z-index: 10;";

		 }
		},2500);
		
		 setTimeout(function()
		 {
		 document.getElementById('circle').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arr').style.visibility="visible";
		 document.getElementById('hv3').style.visibility="hidden";
		 document.getElementById('pole2').style.visibility="hidden";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		
         document.getElementById('circle').onclick=function(){step3a();}
	    },3500);  
	
		
	}
	
	function step3a()
	{
		myStopFunction();
		document.getElementById('circle').style.visibility="hidden";
		// document.getElementById('tapz').style.visibility="visible";			
		document.getElementById('pv').style.visibility="visible";	
		document.getElementById('pv2').style.visibility="visible";
		
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 654.5px; top:375px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		
         document.getElementById('pv').onclick=function(){step3b();}
	

	}
	
	function step3b()
	{
		myStopFunction();
		
	     document.getElementById('pv').style.visibility="hidden";	
		 document.getElementById('pv2').style.visibility="visible";	
		setTimeout(function()
		{
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('hv3').style.visibility="hidden";
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 370.5px; top:193.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		 document.getElementById('pv2').style.visibility="hidden";	
		 document.getElementById('tapz').style.visibility="hidden";	
         document.getElementById('meter').onclick=function(){step31();}
		},1500);
	  
	}
	
	function step31()
	{
		myStopFunction();
		document.getElementById('meter').style.visibility="hidden"
		document.getElementById('mn').style.visibility="visible";
		document.getElementById('b1').style.visibility="visible";
		document.getElementById('b2').style.visibility="visible";
		document.getElementById('p1').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 600px; top:150.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		
         document.getElementById('b2').onclick= '';
         document.getElementById('b1').onclick=function(){step32();}
	}
	
	function step32()
	{
		myStopFunction();
		document.getElementById('mn').style.visibility="hidden";
		document.getElementById('b1').style.visibility="hidden";
		document.getElementById('mn1').style.visibility="visible";
		document.getElementById('b3').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 655px; top:150.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(-215deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(-215deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(-215deg)";
		
         document.getElementById('b2').onclick=function(){step33();}

	}
	
	
	function step33()
	{
		myStopFunction();
		document.getElementById('p1').style.visibility="hidden";
		document.getElementById('p2').style.visibility="visible";

		document.getElementById('mn1').style.visibility="hidden";
		document.getElementById('b2').style.visibility="hidden";
		document.getElementById('mn2').style.visibility="visible";
		document.getElementById('b4').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";

	}
	
	function step41()
	{
		myStopFunction();
		document.getElementById('meter4').style.visibility="hidden";
		document.getElementById('mn42').style.visibility="visible";
		document.getElementById('c3').style.visibility="visible";
		document.getElementById('c4').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 590px; top:138.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(35deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(35deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(35deg)";
		
         document.getElementById('c3').onclick=function(){step42();}
		
	}
	
	
	function step42()
	{
		myStopFunction();
		document.getElementById('mn42').style.visibility="hidden";
		document.getElementById('c3').style.visibility="hidden";
		document.getElementById('mn41').style.visibility="visible";
		document.getElementById('c5').style.visibility="visible";
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 655px; top:138.5px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(-215deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(-215deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(-215deg)";
		
         document.getElementById('c4').onclick=function(){step43();}
	}
	function step43()
	{
		myStopFunction();
		 document.getElementById('mn41').style.visibility="hidden";
		 document.getElementById('c4').style.visibility="hidden";
		 document.getElementById('mn4').style.visibility="visible";
		 document.getElementById('c6').style.visibility="visible";
		 
		 setTimeout(function()
		 {
		 myInt = setInterval(function(){ animatearrow(); }, 500);
	     document.getElementById('arr').style="visibility:visible ;position:absolute; left: 545.5px; top:343px; height: 30px; z-index: 10;";
	     document.getElementById("arr").style.WebkitTransform = "rotate(-215deg)"; 
		     // Code for IE9
         document.getElementById("arr").style.msTransform = "rotate(-215deg)"; 
		     // Standard syntax
	     document.getElementById("arr").style.transform = "rotate(-215deg)";
		
		 document.getElementById('mn4').style.visibility="hidden";
		 document.getElementById('c5').style.visibility="hidden";
		 document.getElementById('c6').style.visibility="hidden";
		 document.getElementById('meter4').style.visibility="hidden";
         document.getElementById('tap0').onclick=function(){step44();}
		 },1500);
	}
		

	function step44()
	{
		myStopFunction();
		
        document.getElementById("tap0").style.visibility="hidden";
		document.getElementById('flow').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";
	}
	
	
	function step6()
	{
		myStopFunction();
		document.getElementById("tap6").style.visibility="hidden";
		document.getElementById("flow6").style.visibility="hidden";
		setTimeout(function()
		{
	    document.getElementById("wr4").style.animation = "water0 2.5s forwards";
	    document.getElementById("needle").style.transformOrigin = "50% 90%";
	    document.getElementById("needle").style.animation = "valveturn-5 2.5s forwards";
	    },1500);
		setTimeout(function()
		{
		document.getElementById('ir').style.visibility="visible";
		document.getElementById('fr').style.visibility="visible";
		document.getElementById('dif').style.visibility="visible";
		if(dia=="50mm")
		{
		document.getElementById('time').style.visibility="visible";
		document.getElementById('time').innerHTML="Time required by water to fill 10cm height&nbsp=&nbsp"+m50[2][p]+"sec";
		}
		else if(dia=="40mm")
		{
		document.getElementById('time').style.visibility="visible";
		document.getElementById('time').innerHTML="Time required by water to fill 10cm height&nbsp=&nbsp"+m40[2][p]+"sec";
		}
		else if(dia=="25mm")
		{
		document.getElementById('time').style.visibility="visible";
		document.getElementById('time').innerHTML="Time required by water to fill 10cm height&nbsp=&nbsp"+m25[2][p]+"sec";
		}
		else if(dia=="40mm")
		{
		document.getElementById('time').style.visibility="visible";
		document.getElementById('time').innerHTML="Time required by water to fill 10cm height&nbsp=&nbsp"+m20[2][p]+"sec";
		}
		else if(dia=="15mm")
		{
		document.getElementById('time').style.visibility="visible";
		document.getElementById('time').innerHTML="Time required by water to fill 10cm height&nbsp=&nbsp"+m15[2][p]+"sec";
		}
		
		document.getElementById('nextButton').style.visibility="visible";
		},5500);
		
	}
	
	
	function step8()
{
	
     
	$("#chartContainer").ejChart(
        {	
		
			primaryXAxis:
            {
                valueType: "logarithmic",
                title: { text: 'Velocity' },
                labelFormat:"{value}"	,			
                range: { min: 100, max: 400, interval: 1 },              
               
            },   
			 primaryYAxis:
            {
				valueType: "logarithmic",
				title: { text: 'i' },
                labelFormat:"{value}",
				range: { min: 0.1, max: 0.5, interval: 0.0001 },                       
            }, 
			
			series: 
			[ 
				{
                    points:[{ x: velocity[0], y: i25[0]}, 
							{ x: velocity[1], y: i25[1]},
							{ x: velocity[2], y: i25[2]},
							{ x: velocity[3], y: i25[3]},
							{ x: velocity[4], y: i25[4]},
							{ x: velocity[5], y: i25[5]},
							{ x: velocity[6], y: i25[6]},
							{ x: velocity[7], y: i25[7]},
							
							],
                    type: 'spline',
					fill:"#0066FF",
					border :{width:5},
					tooltip:{visible:true},
					marker:{
                        shape: 'circle',
						size:
                        {
                            height: 5, width: 5
                        },
                        visible: true
                    },					
					enableAnimation :true
                },
			],
			
            load:"loadTheme",
			isResponsive: true,
			
			legend:{visible:false}
        });
}


	
	function refresh()
	{
		document.getElementById('hv').style.transformOrigin="";
		document.getElementById('hv').style.animation="";
		document.getElementById('hv3').style.transformOrigin="";
		document.getElementById('hv3').style.animation="";
		document.getElementById('wr1').style.transformOrigin="";
		document.getElementById('wr1').style.animation="";
		document.getElementById('wr4').style.transformOrigin="";
		document.getElementById('wr4').style.animation="";
		document.getElementById('wr2').style.transformOrigin="";
		document.getElementById('wr2').style.animation="";
		document.getElementById('flow6').style.transformOrigin="";
		document.getElementById('flow6').style.animation="";
		document.getElementById('needle').style.animation="";
		document.getElementById('arr').style.animation="";
		document.getElementById('lw').innerHTML="";
		document.getElementById('rw').innerHTML="";
		document.getElementById('hl').innerHTML=" ";
		document.getElementById('74').innerHTML="Q<sub>act</sub> = ";
		document.getElementById('75').innerHTML="Velocity (v) = "
		document.getElementById('76').innerHTML="Analytical Friction Factor =  ";
	}
