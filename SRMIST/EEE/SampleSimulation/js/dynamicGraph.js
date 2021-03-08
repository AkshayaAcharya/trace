// function increaseTime(chart,time){
//     let x = time;
//     while(true){
//         x = x + time/100;
//         y = Math.sin(2*Math.PI*(time/x));
//         chart.data.labels.splice(0,0,x.toFixed(2));
//         chart.data.datasets.forEach((dataset) => {
//             dataset.data.splice(0,0,Number(y.toFixed(2)));
//         });
//         chart.data.labels.pop();
//         chart.data.datasets.forEach((dataset) => {
//             dataset.data.pop();
//         });
//         chart.update();
//     }
// }
for(i=0;i<100;i++){
    x = (i/99)*t;
    if(x === 99){
        console.log(x)
    }
    arrX.push(x.toFixed(2));
};
let arrY = [];
for(i=0;i<100;i++){
    y = (i*2*Math.PI)/99;
    y = Math.sin(y);
    arrY.push(Number(y.toFixed(2)));
}