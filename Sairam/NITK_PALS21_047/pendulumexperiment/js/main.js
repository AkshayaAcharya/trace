var length=document.getElementById('length'); 
var change_btn=document.getElementById('variable_changer');
var start_btn=document.getElementById('start');
var stop_btn=document.getElementById('stop');

let string_length=100;


let height=document.getElementById('simulation').offsetHeight;
let width=document.getElementById('simulation').offsetWidth;

function changeWidthHeight() {
    height=document.getElementById('simulation').offsetHeight;
    width=document.getElementById('simulation').offsetWidth;
    console.log(height,width);
}
window.onresize = changeWidthHeight;



change_btn.onclick=function(){
    string_length=length.value;
}



let angle;
let angleV = 0;
let angleA = 0;
let bob;
let origin;
let gravity = 1;
let simulate=false;
let time=0;
let showGraph=false;

let sketch=function(p){
    
    p.setup=function()
    {
        let cnv=p.createCanvas(width-10,height-10);
        p.frameRate(30);
        cnv.position(0,0,'relative');
        angle=Math.PI/6;
        origin=p.createVector(width/2,5);
        bob=p.createVector();
    }

    



    p.draw=function()
    {

        start_btn.onclick=function(){
            simulate=true;
            function timer(){
            time++;
            }
            myVar=setInterval(timer,1000);

        }


        
        stop_btn.onclick=function(){
            simulate=false;
            showGraph=true;
            clearInterval(myVar);

            //var time_period = (2*Math.PI*Math.sqrt((string_length/100)/9.8)) .toFixed(4);
            var time_period =time;
            var nf_hz = (1/time_period) .toFixed(4);
            var nf_rad = (2*Math.PI*nf_hz) .toFixed(4);

            document.getElementById("time_period").innerHTML=time_period;
            document.getElementById("nf_hz").innerHTML=nf_hz;
            document.getElementById("nf_rad").innerHTML=nf_rad;

            time=0;



            


            
        }




        if(simulate==true){
            let force = gravity * Math.sin(angle);
            angleA = (-1 * force) / string_length;
            angleV += angleA;
            angle += angleV;
    
        }



        if(simulate==false){
            angleA=0;
            angleV=0;
            angle=Math.PI/6;


        }
        



        bob.x=string_length* Math.sin(angle) + origin.x;
        bob.y=string_length* Math.cos(angle) + origin.y;
        
        p.background(255);
        p.stroke(0);
        p.strokeWeight(8);
        p.line(origin.x,origin.y,bob.x,bob.y);
        p.fill(0);
        p.circle(bob.x,bob.y,32);
        
        if (showGraph==true)
        {

            let c= p.color(0,0,255);
            p.stroke(c);
            p.fill(c);
            p.strokeWeight(4);
            p.line(origin.x-150,150,origin.x-150,350);
            
            let amp = 50;
            let ang = p.PI / 2;
            let a=0;
            let x=origin.x-150;
            let y=250;

            
            
            p.strokeWeight(5);
            p.beginShape();
            
            
            for (let i = 0; i < 25; i++) {

                p.curveVertex(x-20, y + p.cos(a) * amp);
                p.line(x+2,y,x,y);
                p.smooth();
                a = a + ang;
                x+=20;
            }
            p.endShape();


        }
            



    }

}
let obj=document.getElementById("simulation");
new p5(sketch,obj);