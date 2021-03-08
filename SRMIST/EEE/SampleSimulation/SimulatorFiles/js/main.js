//Math functions 
const pi = Math.PI;
const sin = Math.sin;
const cos = Math.cos;
const floor = Math.floor;
//initialisation of variables
let g = 9.8;
let length = 0;
let timePeriod = 0;
let time = 0;
let timeIncrement = 0.01;
let simSpeed = document.getElementById("simulationSpeed").value;
let frequencyRad = (2*pi/timePeriod);
//chart initialisation
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["0","1","2","3","4","5"],
        datasets: [{
            label: 'Amplitude',
            fill:false,
            borderColor: "#6f4a8e",
            data: [],
        }]
    },
    options: {
        animation : false,
        responsive:false,
        elements:{
            point:{
                radius:0
            }
        },
        legend:{
            display:false,
        },
        tooltips: {
            enabled: true
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display:true,
                    labelString:"Time(s)",
                    fontStyle:"bold",
                    fontColor:"black"
                },
                ticks: {
                    display: true,
                    fontStyle:"bold",
                    fontColor:"black"
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display:true,
                    labelString:"Amplitude",
                    fontStyle:"bold",
                    fontColor:"black"
                },
                ticks:{
                    fontStyle:"bold",
                    fontColor:"black"
                }
            }]
        }
    }
});
//annimation initialisation
let req = undefined;
let isRunning = false;
let isPaused = false;
//pendulum canvas initialisations
let c = document.getElementById("pendulum").getContext("2d");
let canvas = document.getElementById("pendulum");
const canvasWrapper = document.getElementById("pendulumWrapper");
canvas.width = canvasWrapper.clientWidth;
canvas.height = canvasWrapper.clientHeight;
const bobRadius = 35;
const heightFromTop = 75;
const pivot = 50;
let theta = 0;
const thetaMax = pi/6;
//pendulum canvas cordinate manuplators
function w(x) { return ((x) * canvas.width/100); }
function h(y) { return ((y) * canvas.height/100); }
function xCoordinate(l) {
    const x = floor(sin(theta) * l);
    return x;
}
function yCoordinate(l) {
    const y = floor(cos(theta) * l);
    return y;
}
//general functions
function disableInputs(bool){
    document.getElementById("gravitySelect").disabled = bool;
    document.getElementById("gravityCustomInput").disabled = bool;
    document.getElementById("length").disabled = bool; 
}
function gravitySelector(){
    const selected = document.getElementById("gravitySelect").value;
    const input = document.getElementById("gravityCustomInput");
    if(selected != "custom"){
        input.disabled = true;
        input.value = selected;
        g = selected;
    }    
    else{
        input.disabled = false;
        if(input.value<=0){
            alert("Gravity must be more than 0");
            input.value = g;
        }
        else{
            g = Number(input.value);
        }
    }
}
function setButtons(ru, st, pa, re, ss) {
    document.getElementById("pauseButton").hidden = pa;
    document.getElementById("resumeButton").hidden = re;
    document.getElementById("stopButton").hidden = st;
    document.getElementById("runButton").hidden = ru;
}
function updateSpeed(){
    if(!isRunning && !isPaused){
        simSpeed = document.getElementById("simulationSpeed").value;
        document.getElementById("speedometer").innerHTML = simSpeed + "x";
        timeIncrement = 0.01 * simSpeed;
    }
    else{
        alert("Stop the simulation before changing speed");
    }
}
function calculatePeriod(){
    length = Number(document.getElementById("length").value)/1000;
    if(length<0){
        alert("String length cannot be negative");
        length = 0;
        document.getElementById("length").value = length*1000; 
    }
    timePeriod = 2*pi*Math.sqrt(length/g);
    document.getElementById("timePeriod").innerHTML = timePeriod.toFixed(4) + " s";
    const frequencyHz = 1/timePeriod;
    document.getElementById("frequencyHz").innerHTML = frequencyHz.toFixed(4) + " Hz";
    frequencyRad = 2*pi/timePeriod;      ;
    document.getElementById("frequencyRad").innerHTML = frequencyRad.toFixed(4) + " rad/s";
}
//pendulum functions
function updatePendulum(){
    c.clearRect(0, 0, w(100), h(100));
    c.beginPath();
    c.strokeStyle = "#221f3b";
    c.moveTo(w(pivot),0);
    c.lineTo(w(pivot)+xCoordinate(h(heightFromTop)-bobRadius),yCoordinate(h(heightFromTop)-bobRadius));
    c.stroke();
    c.beginPath();
    c.strokeStyle = "#221f3b";
    c.fillStyle="#6f4a8e"; 
    c.arc(w(pivot)+xCoordinate(h(heightFromTop)),yCoordinate(h(heightFromTop)),bobRadius,0,2*pi);
    c.fill();
    c.stroke();
}
//Chart functions
function populateChart(){
        let arrX = [];
        let arrY = [];
        for(time;time<=timePeriod;time+=timeIncrement){
            arrX.push(time.toFixed(2));
            let y = (time*2*pi)/timePeriod;
            y = cos(y);
            arrY.push(Number(y.toFixed(2)));
        };
        chart.data.labels = arrX;
        chart.data.datasets[0].data = arrY;
        chart.update(); 
}
function updateChart(){
    let y = cos(2*pi*(time/timePeriod));
    chart.data.labels.push(time.toFixed(2))
    chart.data.labels.splice(0,1);
    ;
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(Number(y.toFixed(2)));
        dataset.data.splice(0,1);
    });
    chart.update();
}
//Event listner pendulum
window.addEventListener("resize",function(){
    updatePendulum();
});
//start up tasks
updateSpeed();
setButtons(false,true,true,true,false);
updatePendulum();
gravitySelector();
//Simulation controls
function runSimulation(){
    if(simSpeed<=0){
        alert("Simulation speed must be greater than 0");
    }
    else if(!isRunning && !isPaused){
        gravitySelector();
        calculatePeriod();
        if(timePeriod > 0){
            populateChart();
            isRunning = true;
            setButtons(true,false,false,true,true);
            disableInputs(true);
            simulate();
        }
    }else{
        alert("Stop the simulation Before you Run")
        document.getElementById("length").value = length*100; 
    }
}
function simulate(){
        req = setInterval(function(){
        time = (time + timeIncrement);
        theta = (thetaMax)*cos(frequencyRad*time);
        //Chart simulation
        updateChart();
        //Pendulum simulation
        updatePendulum();
    },10);  
}
function pauseSimulation(){
    if(!isPaused && isRunning){
        clearInterval(req);
        isRunning = false;
        isPaused = true;
        setButtons(true,false,true,false,true);   
    }
}
function resumeSimulation(){
    if(!isRunning && isPaused){
        isRunning = true;
        isPaused = false;
        setButtons(true,false,false,true,true);
        simulate();
    }
}
function stopSimulation(){
    clearInterval(req);
    setButtons(false,true,true,true,false);
    disableInputs(false);
    gravitySelector();
    timePeriod = 0;
    time = 0;
    chart.data.labels = ["0","1","2","3","4","5"];
    chart.data.datasets[0].data = [];
    chart.update();
    theta = 0;
    isRunning = false;
    isPaused = false;
    req = undefined;
    updatePendulum();
}