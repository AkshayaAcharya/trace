var ctx = document.getElementById('myChart').getContext('2d');
var c = document.getElementById("pendulum").getContext("2d");
let timePeriod = 0;
let req = undefined;
let time = 0;
let timeIncrement = 0;
let chart = undefined;
let isRunning = false;
let isPaused = false;
let length = 0;
setButtons(false,true,true,true);
function calculatePeriod(){
    if(!isRunning && !isPaused){
        length = Number(document.getElementById("length").value)/100;
        if(length<0){
            alert("String length cannot be negative");
            length = 0;
            document.getElementById("length").value = length*100; 
        }
        timePeriod = 2*Math.PI*Math.sqrt(length/9.8);
        timeIncrement = timePeriod/100;
        document.getElementById("timePeriod").innerHTML = "Time Period : " + timePeriod.toFixed(2) + "s";
        const frequencyHz = 1/timePeriod;
        document.getElementById("frequencyHz").innerHTML = "Frequency in Hz : " + frequencyHz.toFixed(2) + "Hz";
        const frequencyRad = 2*Math.PI/timePeriod;
        document.getElementById("frequencyRad").innerHTML = "Frequency in rad/s : " + frequencyRad.toFixed(2) + "rad/s";
        displayGraph();
        displayPendulum();
    }else{
        alert("Stop the simulation Before you Run")
        document.getElementById("length").value = length*100; 
    }
}
function displayPendulum(){
    c.beginPath();
    
    c.beginPath();
    c.arc(100,100,30,0,2*Math.PI);
    c.stroke();
}
function displayGraph(){
    if(timePeriod!=0){
        let arrX = [];
        let arrY = [];
        for(time;time<=timePeriod;time+=timeIncrement){
            arrX.push(time.toFixed(2));
            let y = (time*2*Math.PI)/timePeriod;
            y = Math.sin(y);
            arrY.push(Number(y.toFixed(2)));
        };
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels:arrX,
                datasets: [{
                    label: 'Simple Pendulum',
                    fill:false,
                    borderColor: 'rgb(255, 99, 132)',
                    data: arrY,
                }]
            },
            options: {
                animation : false,
                elements:{
                    point:{
                        radius:0
                    }
                },
                legend:{
                    display:false
                },
                tooltips: {
                    enabled: true
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: true
                        }
                    }]
                }
            }
        });
        isRunning = true;
        setButtons(true,false,false,true);
        animate();
    }    
}

function animate(){
    req = requestAnimationFrame(animate);
    time = (time + timeIncrement);
        let y = Math.sin(2*Math.PI*(time/timePeriod));
        chart.data.labels.push(time.toFixed(2))
        chart.data.labels.splice(0,1);
        ;
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(Number(y.toFixed(2)));
            dataset.data.splice(0,1);
        });
        chart.update();
}
function pauseAnimation(){
    if(!isPaused && isRunning){
        cancelAnimationFrame(req);
        isRunning = false;
        isPaused = true;
        setButtons(true,false,true,false);   
    }
}
function resumeAnimation(){
    if(!isRunning && isPaused){
        isRunning = true;
        isPaused = false;
        setButtons(true,false,false,true);
        animate();
    }
}
function stopAnimation(){
    cancelAnimationFrame(req);
    setButtons(false,true,true,true);
    timePeriod = 0;
    time = 0;
    timeIncrement = 0;
    chart = undefined;
    isRunning = false;
    isPaused = false;
    req = undefined;
}

function setButtons(ru=false,st=false,pa=false,re=false){
    document.getElementById("pauseButton").disabled = pa;
    document.getElementById("resumeButton").disabled = re;
    document.getElementById("stopButton").disabled = st;
    document.getElementById("runButton").disabled = ru;
}

displayPendulum();