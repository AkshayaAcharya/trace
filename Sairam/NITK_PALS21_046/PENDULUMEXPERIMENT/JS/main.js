<script type="text/javascript">
var canvas = document.getElementById('Canvas_One');
var context = canvas.getContext('2d');
var i;
var x;
var sp;
//code for static string - grey colour
context.beginPath();
context.moveTo(200, 0);
context.lineTo(200, 135);
context.lineWidth = 5;
context.strokeStyle = "black";
context.stroke();
// code for the static ball - gradient blue
context.beginPath();
context.arc(200, 150, 20, 0, 2 * Math.PI, false);
var grd = context.createRadialGradient(200, 150, 2, 200, 150, 18);
// light blue
grd.addColorStop(0, '#8ED6FF');
// dark blue
grd.addColorStop(1, '#873b81');
context.fillStyle = grd;
context.fill();
// function for the animation
function circ() {
context.clearRect(0, 0, canvas.width, canvas.height);
i = eval(document.getElementById('h').value) + 10;
context.beginPath();
context.moveTo(200, 0); context.lineTo(200 + 40 * Math.sin(i * Math.PI / 180), 135);
context.lineWidth = 5;
context.strokeStyle = "black";
context.stroke();
context.beginPath();
context.arc(200 + 40 * Math.sin(i * Math.PI / 180), 150, 20, 0, 2 * Math.PI, false);
if (i == 360 || i > 360) { i = 0; }
//alert(i);
//alert(i);
document.getElementById('h').value = i;
//create radial gradient
var grd = context.createRadialGradient(200 + 40 * Math.sin(i * Math.PI / 180), 150, 2, 200 + 40 * Math.sin(i * Math.PI / 180), 150, 18);
// light blue
grd.addColorStop(0, '#8ED6FF');
// dark blue
grd.addColorStop(1, '#873b81');
context.fillStyle = grd;
context.fill();
}
// function for timing
function anim() {
if
(document.getElementById('R1').checked)
{ sp = 200; }
else if (document.getElementById('R2').checked) { sp = 100; }
else if (document.getElementById('R3').checked) { sp = 80; }
else
{ sp = 200; }
x = window.setInterval('circ()', sp);
}
</script>