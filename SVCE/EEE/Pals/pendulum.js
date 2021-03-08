// Colors

var colorBackground = "#eae7dc";                           // Background color
var colorClock1 = "#808080";                               // Farbe der Digitaluhr (außen)
var colorClock2 = "#000000";                               // Hintergrundfarbe der display
var colorClock3 = "#ff0000";                               // Farbe der digits
var colorElongation = "#ff0000";                           // Farbe für Elongation
var colorVelocity = "#ff00ff";                             // Farbe für Geschwindigkeit
var colorAcceleration = "#0000ff";                         // Farbe für Beschleunigung
var colorForce = "#008020";                                // Farbe für Kraft
var colorBody = "#ffffff";                                 // Farbe des Pendulum body

// Other constants:

var DEG = Math.PI/180;                                     // Angular degree
var ax = 250, ay = 100;                                     // Suspension position (pixels)
var xD = 650;                                              // x-Coordinate Origin
var yD1 = 260, yD2 = 250;                                  // y-Coordinate Origin
var FONT1 = "normal normal bold 18px sans-serif";          // Character set
var tPix = 20;                                             // Conversion factor (pixels per s)

// Attribute:

var canvas, ctx;                                           // Artboard, graphic context
var width, height;                                         // Dimensions of the drawing area (pixels)
var bu1, bu2;                                              // Switch buttons (reset, start / pause / continue)
var cbSlow;                                                // Option button slow motion
var ipL, ipG, ipM, ipA;                                    // Input fields
var rbY, rbV, rbA, rbF, rbE;                               // Radiobuttons
var on;                                                    // Flag for movement
var slow;                                                  // Slow motion flag
var t0;                                                    // Starting time
var t;                                                     // Current time (s)
var tU;                                                    // Time for diagram origin (s)
var l;                                                     // Pendulum length (m)
var lPix;                                                  // Pendulum length (pixels)
var g;                                                     // Acceleration due to gravity (m / s²)
var m;                                                     // Mass (kg)
var omega;                                                 // Angular frequency (rad / s)
var tPer;                                                  // Oscillation period (s)                                
var fHz;                                                   //Frequency (hertz)
var frad;                                                  //Frequency (radain/sec)
var phi;                                                   // Phase angle (radians)
var sinPhi, cosPhi;                                        // Trigonometric values
var alpha0;                                                // Maximum deflection angle (radians)
var alpha;                                                 // Current deflection angle (radians)
var sinAlpha, cosAlpha;                                    // Trigonometric values
var yPix;                                                  // Conversion factor (pixels per SI unit)
var px, py;                                                // Position of the pendulum body (pixel)
var nrSize;                                                // Number of the size under consideration

// Element of button (from html file):
// id ..... ID in html command
// text ... Text (optional)

function getElement (id, text) {
  var e = document.getElementById(id);                     // Element
  if (text) e.innerHTML = text;                            // Set text, if defined
  return e;                                                // Return value
  } 

// Start:

function start () {
  canvas = getElement("cv");                               // artboard
  width = canvas.width; 
  height = canvas.height;            // dimensions (pixels)
  ctx = canvas.getContext("2d");                           // graphic context
  bu1 = getElement("bu1",text01);                          // reset button
  bu2 = getElement("bu2",text02[0]);                       // start button
  bu2.state = 0;                                           // initial state (before the animation starts)
  cbSlow = getElement("cbSlow");                           // radio button (slow motion)
  cbSlow.checked = false;                                  // Turned off slow motion
  getElement("lbSlow",text03);                             // Explanatory text (slow motion)
  getElement("ipLa",text04);                               // Explanatory text (pendulum length)
  ipL = getElement("ipLb");                                // input field (pendulum length)
  getElement("ipLc",meter);                                // unit (pendulum length)
  var ipgx = getElement("ipGx");                           // Additional line (acceleration due to gravity)
  if (ipgx) ipgx.innerHTML = text05x;                      // Explanatory text, additional line (acceleration due to gravity)
  getElement("ipGa",text05);                               // Explanatory text (acceleration due to gravity)
  ipG = getElement("ipGb");                                // Input field (gravitational acceleration)
  getElement("ipGc",meterPerSecond2);                      // Unit (gravitational acceleration)
  getElement("ipMa",text06);                               // Explanatory text (mass)
  ipM = getElement("ipMb");                                // Input field (mass)
  getElement("ipMc",kilogram);                             // Unit (mass)
  getElement("ipAa",text07);                               // Explanatory text (amplitude)
  ipA = getElement("ipAb");                                // Input field (amplitude)
  getElement("ipAc",degree);                               // Unit (amplitude)
  rbY = getElement("rbY");                                 // Radio button (elongation)
  getElement("lbY",text08);                                // Explanatory text (elongation)
  rbY.checked = true;                                      // Select radio button
  rbV = getElement("rbV");                                 // Radio button (speed)
  getElement("lbV",text09);                                // Explanatory text (speed)
  rbA = getElement("rbA");                                 // Radio button (acceleration)
  getElement("lbA",text10);                                // Explanatory text (acceleration)
  //rbF = getElement("rbF");                                 // Radio button (force)
  //getElement("lbF",text11);                                // Explanatory text (force)
  //rbE = getElement("rbE");                                 // Radiobutton (Energie)
  //getElement("lbE",text12);                                // Explanatory text (energy)
  //getElement("author",author);                             // Autor

  l = 0;                                                   // Initial value pendulum length (m)
  g = 9.81;                                                // Initial value acceleration due to gravity (m / s²)
  m = 1;                                                   // Initial value mass (kg)
  alpha0 = 10*DEG;                                         // Initial value angular amplitude (radians)
  updateInput();                                           // Update input fields
  calculation();                                           // Calculations (side effect!)
    
  on = false;                                              // Animation switched off
  slow = false;                                            // Turned off slow motion
  t = 0;                                                   // Current time (s)
  t0 = new Date();                                         // Starting time
  setInterval(paint,40);                                   // Timer interval 0.040 s
  
  bu1.onclick = reactionReset;                             // Reaction to reset button
  bu2.onclick = reactionStart;                             // Response to start button
  cbSlow.onclick = reactionSlow;                           // Reaction to option button slow motion
  ipL.onkeydown = reactionEnter;                           // Reaction to Enter key (input pendulum length)
  ipG.onkeydown = reactionEnter;                           // Reaction to the Enter key (entry of gravitational acceleration)
  ipM.onkeydown = reactionEnter;                           // Reaction to Enter key (input mass)
  ipA.onkeydown = reactionEnter;                           // Response to the Enter key (input amplitude)
  rbY.onclick = reactionRadioButton;                       // Response to the elongation radio button
  rbV.onclick = reactionRadioButton;                       // Response to the speed radio button
  rbA.onclick = reactionRadioButton;                       // Reaction to the radio button acceleration
  //rbF.onclick = reactionRadioButton;                       // Reaction to radio button Kraft
  //rbE.onclick = reactionRadioButton;                       // Reaction to the energy radio button
  nrSize = 0;                                              // Elongation selected 
    
  } // Ende der Methode start
  
// State definition for switch button Start/Pause/Weiter:
  
function setButton2State (st) {
  bu2.state = st;                                          // Save state
  bu2.innerHTML = text02[st];                              // Update text
  }
  
// toggling Start/Pause/Weiter:
  
function switchButton2 () {
  var st = bu2.state;                                      // Current state
  if (st == 0) st = 1;                                     // If the initial state, start
  else st = 3-st;                                          // Switch between animation and interruption
  setButton2State(st);                                     // Save new state, change text
  }
  
// Activation or deactivation of the input fields:
// p ... flag for possible input

function enableInput (p) {
  ipL.readOnly = !p;                                       // Input field for pendulum length
  ipG.readOnly = !p;                                       // Input field for gravitational acceleration
  ipM.readOnly = !p;                                       // Input field for mass
  ipA.readOnly = !p;                                       // Input field for angle amplitude
  }
  
// Reaction to reset button:
// Side effect t, tU, on, slow
   
function reactionReset () {
  setButton2State(0);                                      // State of the button Start / Pause / Continue
  enableInput(true);                                       // Activate input fields
  t = tU = 0;                                              // Reset time variable
  on = false;                                              // Animation switched off
  slow = cbSlow.checked;                                   // Slow motion flag
  reaction();                                              // Accept the entered values and calculate
  paint();                                                 // Draw again
  }
  
// Reaction to the button Start / Pause / resume:
// side effect t, tU, on, slow, l, g, m, alpha0, omega, tPer, lPix, phi, sinPhi, cosPhi, alpha, sinAlpha, cosAlpha, px, py

function reactionStart () {
  if (bu2.state != 1) t0 = new Date();                     // If animation is switched on, new start time
  switchButton2();                                         // Change the state of the button
  enableInput(false);                                      // Deactivate input fields
  on = (bu2.state == 1);                                   // Flag for animation
  slow = cbSlow.checked;                                   // Slow motion flag
  reaction();                                              // Accept the entered values and calculate
  paint();                                                 // Draw again
  }
  
// Reaction to option button slow motion:
// Side effect slow

function reactionSlow () {
  slow = cbSlow.checked;                                   // Set flag
  }
  
// Auxiliary routine: accept input and calculate
// Seiteneffekt l, g, m, alpha0, omega, tPer, lPix

function reaction () {
  input();                                                 // Accept entered values (corrected if necessary)
  calculation();                                           // Calculations
  }
  
// Reaction to a key press (only to the Enter key):
  
function reactionEnter (e) {
  if (e.key && String(e.key) == "Enter"                    // If Enter key (Firefox / Internet Explorer) ...
  || e.keyCode == 13)                                      // If Enter key (Chrome) ...
    reaction();                                            //... take over data and calculate                         
  paint();                                                 // Draw again
  }

// Reaction to radio button:
// Seiteneffekt nrSize

function reactionRadioButton () {
  if (rbY.checked) nrSize = 0;                             // Either elongation ...
  else if (rbV.checked) nrSize = 1;                        // ... or speed ...
  else if (rbA.checked) nrSize = 2;                        // ... or acceleration ...
  else if (rbF.checked) nrSize = 3;                        // ... or strength ...
  else nrSize = 4;                                         // ... or choose energy
  }

//-------------------------------------------------------------------------------------------------

// Calculations
// Seiteneffekt omega, tPer, lPix

function calculation () {
  omega = Math.sqrt(g/l);                                  // Angular frequency (rad / s)
  tPer =2*Math.PI/(omega*10);                        // Oscillation period (s)
  lPix = 1*l;                                    // Pendulum length (pixels)
  }
  
// Converting a number into a character string:
// n ..... Given number
// d ..... Number of digits
// fix ... Flag for decimal places (as opposed to valid digits)

function ToString (n, d, fix) {
  var s = (fix ? n.toFixed(d) : n.toPrecision(d));         // String with decimal point
  return s.replace(".",decimalSeparator);                  // Replace point with comma if necessary
  }
  
// Enter a number
// ef .... input field
// d ..... number of digits
// fix ... Flag for decimal places (as opposed to valid digits)
// min ... minimum of the permitted range
// max ... maximum of the permitted range
// Return value: number or NaN
  
function inputNumber (ef, d, fix, min, max) {
  var s = ef.value;                                        // Character string in the input field
  s = s.replace(",",".");                                  // If necessary, convert a comma into a point
  var n = Number(s);                                       // Convert to number if possible
  if (isNaN(n)) n = 0;                                     // Interpret meaningless entries as 0
  if (n < min) n = min;                                    // If the number is too small, correct it
  if (n > max) n = max;                                    // If the number is too large, correct it
  ef.value = ToString(n,d,fix);                            // Correct the input field if necessary
  return n;                                                // Return value
  }
   
// Entire input:
// side effect l, g, m, alpha0

function input () {
  l= inputNumber(ipL,3,true,0.5,200);                    // Pendulum length (mm)
  g = inputNumber(ipG,2,true,1,100);                      // Acceleration due to gravity (m / s²)
  m = inputNumber(ipM,3,true,1,10);                       // Mass (kg)
  alpha0 = DEG*inputNumber(ipA,1,true,2,20);             // Angular amplitude (radians)
  }
  
// Update of the input fields:

function updateInput () {
  ipL.value = ToString(l,3,true);                          // Input field for pendulum length (m)
  ipG.value = ToString(g,2,true);                          // Input field for gravitational acceleration (m / s²)
  ipM.value = ToString(m,3,true);                          // Input field for mass (kg)
  ipA.value = ToString(alpha0/DEG,1,true);                 // Input field for angle amplitude (°)
  }
   
//-------------------------------------------------------------------------------------------------

// New path with default values:

function newPath () {
  ctx.beginPath();                                         // New path
  ctx.strokeStyle = "#000000";                             // Line color black
  ctx.lineWidth = 1;                                       // Line thickness 1
  }

// rectangle with black border:
// (x, y) ... coordinates of the top left corner (pixels)
// w ....... width (pixels)
// h ....... height (pixels)
// c ....... fill color (optional)

function rectangle (x, y, w, h, c) {
  if (c) ctx.fillStyle = c;                                // Fill color
  newPath();                                               // New path
  ctx.fillRect(x,y,w,h);                                   // Fill in the rectangle
  ctx.strokeRect(x,y,w,h);                                 // Draw the border
  }
  
// circular disc with black border:
// (x, y) ... center point coordinates (pixels)
// r ....... radius (pixels)
// c ....... fill color (optional)

function circle (x, y, r, c) {
  if (c) ctx.fillStyle = c;                                // Fill color
  newPath();                                               // New path
  ctx.arc(x,y,r,0,2*Math.PI,true);                         // Prepare the circle
  ctx.fill();                                              // Fill in the circle
  ctx.stroke();                                            // Draw the border
  }
  
// Draw pendulum:
// Seiteneffekt alpha, sinAlpha, cosAlpha, px, py

function pendulum () {
  alpha = alpha0*cosPhi;                                   // Deflection (radians)                     
  sinAlpha = Math.sin(alpha);                              // Sine value 
  cosAlpha = Math.cos(alpha);                              // Cosine value
  px = ax+lPix*sinAlpha;                                   // x-coordinate of the pendulum body (pixel)
  py = ay+lPix*cosAlpha;                                   // y-coordinate of the pendulum body (pixel)
  newPath();                                               // New path with default values
  ctx.moveTo(ax,ay);                                       // Starting point (suspension)
  ctx.lineTo(px,py);                                       // Continue to the center of the pendulum body
  ctx.closePath();                                         // Close path
  ctx.stroke();                                            // Draw line for string
  circle(px,py,5,colorBody);                               // Pendulum body
  }
  
// Draw digital clock:

function clock (x, y) {
  rectangle(x-60,y+130,120,32,colorClock1);                 // casing
  rectangle(x-50,y+135,100,20,colorClock2);                 // Background of the advertisement
  ctx.fillStyle = "#ff0000";                               // Color for digits
  ctx.font = "normal normal bold 16px monospace";          // Character set
  ctx.textAlign = "center";                                // Centered output
  var n = Math.floor(t/1000);                              // Number of time segments of 1000 s each
  var s = (t-n*1000).toFixed(3)+" "+second;                // Time specification (unit s, new start every 1000 s)
  s = s.replace(".",decimalSeparator);                     // Replace point with comma if necessary
  while (s.length < 9) s = " "+s;                          // Possibly add spaces at the beginning
  ctx.fillText(s,x,y+150);                                   // Issue of time
  }
  
// draw arrow:
// x1, y1 ... starting point
// x2, y2 ... end point
// w ........ line thickness (optional)
// Please note: The color is determined by ctx.strokeStyle.

function arrow (x1, y1, x2, y2, w) {
  if (!w) w = 1;                                           // If line thickness is not defined, default value                          
  var dx = x2-x1, dy = y2-y1;                              // Vector coordinates
  var length = Math.sqrt(dx*dx+dy*dy);                     // length
  if (length == 0) return;                                 // Abort if length is 0
  dx /= length; dy /= length;                              // Unit vector
  var s = 2.5*w+7.5;                                       // Length of the arrowhead 
  var xSp = x2-s*dx, ySp = y2-s*dy;                        // Auxiliary point for arrowhead         
  var h = 0.5*w+3.5;                                       // Half the width of the arrowhead
  var xSp1 = xSp-h*dy, ySp1 = ySp+h*dx;                    // Arrowhead corner
  var xSp2 = xSp+h*dy, ySp2 = ySp-h*dx;                    // Arrowhead corner
  xSp = x2-0.6*s*dx; ySp = y2-0.6*s*dy;                    // Re-entrant corner of the arrowhead
  ctx.beginPath();                                         // New path
  ctx.lineWidth = w;                                       // Line thickness
  ctx.moveTo(x1,y1);                                       // Starting point
  if (length < 5) ctx.lineTo(x2,y2);                       // If the arrow is short, continue to the end point, ...
  else ctx.lineTo(xSp,ySp);                                // ... otherwise continue to the re-entrant corner
  ctx.stroke();                                            // Draw a line
  if (length < 5) return;                                  // If a short arrow, no point
  ctx.beginPath();                                         // New path for arrowhead
  ctx.fillStyle = ctx.strokeStyle;                         // Fill color like line color
  ctx.moveTo(xSp,ySp);                                     // Starting point (receding corner)
  ctx.lineTo(xSp1,ySp1);                                   // Continue to the point on one side
  ctx.lineTo(x2,y2);                                       // On to the top
  ctx.lineTo(xSp2,ySp2);                                   // Continue to the point on the other side
  ctx.closePath();                                         // Back to the starting point
  ctx.fill();                                              // Draw an arrowhead
  }
  
// vector arrow from the pendulum body:
// r ..... length of the arrow
// phi ... angle to the horizontal (radians, counterclockwise)
  
function arrowPendulum (r, phi) {
  var x = px+r*Math.cos(phi);                              // x-coordinate of the arrowhead
  var y = py-r*Math.sin(phi);                              // y-coordinate of the arrowhead
  arrow(px,py,x,y,3);                                      // Draw arrow
  }
  
// Align text (font FONT1):
// s ....... string
// t ....... type (0 for left-justified, 1 for centered, 2 for right-justified)
// (x, y) ... position (pixel)

function alignText (s, t, x, y) {
  ctx.font = FONT1;                                        // Character set
  if (t == 0) ctx.textAlign = "left";                      // Left-justified depending on the value of t ...
  else if (t == 1) ctx.textAlign = "center";               // ... or centered ...
  else ctx.textAlign = "right";                            // ... or right justified
  ctx.fillText(s,x,y);                                     // Output text
  }
  
// Horizontal axis (with labeling and ticks) for diagram:
// (x, y) ... origin (pixels)
  
function horizontalAxis (x, y) {
  ctx.strokeStyle = "#000000";                             // Line color black
  arrow(x-20,y,x+240,y);                                   // Draw arrow
  alignText(symbolTime,1,x+230,y+15);                      // Lettering (t)
  alignText(text21,1,x+230,y+27);                          // Lettering (in s)
  var t0 = Math.ceil(tU);                                  // Time (s) for the first tick
  var x0 = Math.round(x+tPix*(t0-tU));                     // x-coordinate of the first tick            
  for (i=0; i<=10; i++) {                                  // For all ticks ...
    var xs = x0+i*tPix;                                    // Calculate x-coordinate
    ctx.moveTo(xs,y-3); ctx.lineTo(xs,y+3);                // Prepare tick
    if (xs >= x+5 && xs <= x+215                           // If tick isn't too far left or too far right ...
    && (t0+i <= 100 || (t0+i)%2 == 0))                     // and time (s) less than 100 or even ...
      alignText(""+(t0+i),1,xs,y+13);                      // ... label tick
    }
  ctx.stroke();                                            // Draw ticks
  }
    
// Vertical axis (with labeling and ticks) for diagram:
// (x, y) ... origin (pixels)
// yLow .... lower end of the axis (pixels)
// yHigh ... top of the axis (pixels)
// maxSI ... maximum value (SI unit)
// side effect yPix
  
function verticalAxis (x, y, yLow, yHigh, maxSI) {
  var pot10 = Math.pow(10,Math.floor(Math.log(maxSI)/Math.LN10));    // Next lower power of ten to maxSI
  var q = maxSI/pot10;                                     // Ratio (between 1 and 10)
  var n;                                                   // Number of ticks
  if (q > 5) n = 10; else if (q > 2) n = 5; else n = 2;    // "Smooth" value for the number of ticks
  ctx.strokeStyle = "#000000";                             // Line color black
  arrow(x,yLow,x,yHigh);                                   // Draw arrow
  var n0 = (nrSize<4 ? -n : 0);                            // Number of the lowest tick 
  ctx.beginPath();                                         // New path                      
  for (i=n0; i<=n; i++) {                                  // Für alle Ticks ...
    var ys = y-i*100/n;                                    // y coordinate of the tick
    ctx.moveTo(x-3,ys); ctx.lineTo(x+3,ys);                // Prepare tick
    var s = Number(i*pot10).toPrecision(1);                // Character string for labeling
    if (Math.abs(i*pot10) >= 10)                           // If necessary ...
      s = ""+Math.round(i*pot10);                          // ... prevent the power of ten notation
    s = s.replace(".",decimalSeparator);                   // If necessary, convert a period into a comma
    if ((n < 10 || i%2 == 0) && i != 0)                    // If useful ...
      alignText(s,2,x-3,ys+4);                             // ... label tick
    }
  ctx.stroke();                                            // Ticks zeichnen
  yPix = 100/n/pot10;                                      // Update conversion factor
  }
      
// Sine curve (approximation by polygonal curve):
// (x, y) ... zero point (pixels)
// per ..... period (pixel)
// ampl .... amplitude (pixels)
// xMin .... Minimum x value (pixels)
// xMax .... maximum x value (pixels)

function sinus (x, y, per, ampl, xMin, xMax) {
  var omega = 2*Math.PI/per;                               // Auxiliary variable
  newPath();                                               // New path (default values)
  var xx = xMin;                                           // x-coordinate for left margin
  ctx.moveTo(xx,y-ampl*Math.sin(omega*(xx-x)));            // Starting point
  while (xx < xMax) {                                      // As long as the right margin has not yet been reached ...
    xx++;                                                  // Increase the x coordinate
    ctx.lineTo(xx,y-ampl*Math.sin(omega*(xx-x)));          // Prepare a new section
    }
  ctx.stroke();                                            // Draw polygon for curve
  }
  
// draw diagram:

function diagram (type, x, y, yMax) {
  horizontalAxis(x,y);                                     // Horizontal axis with labeling and ticks
  verticalAxis(x,y,y+120,y-135,yMax);                      // Vertical axis with labeling and ticks  
  sinus(x-type*tPer*5-tU*tPix,y,tPer*tPix,yMax*yPix,x,x+200);   // Sine curve  
  }
// Marking in diagram for current value:
// val .... numerical value (SI unit)
// x, y ... origin
// c ...... color
  
function drawMomVal (val, x, y, c) {
  x += (t-tU)*tPix; y -= val*yPix;                         // Center point coordinates (pixels)
  circle(x,y,2,c);                                         // Small circle with a border
  }
  
// Output of a numerical value:
// s ........ Name of the size
// v ........ numerical value
// u ........ unit
// n ........ Number of valid digits
// (x1, y) ... position of the text (pixels)
// (x2, y) ... position of the numerical value (pixel)
  
function writeValue (s, v, u, n, x1, x2, y) {
  alignText(s+":",0,x1,y);                                 // Designation of the size
  s = v.toPrecision(n);                                    // Rounds with the desired accuracy
  s = s.replace(".",decimalSeparator);                     // Possibly a comma instead of a period
  alignText(s+" "+u,0,x2,y);                               // Number with unit
  }
  
// Centered text with index:
// s1 ...... normal text
// s2 ...... index
// (x, y) ... position
    
function centerTextIndex (s1, s2, x, y) {
  var w1 = ctx.measureText(s1).width;                      // Width of s1 (pixels)
  var w2 = ctx.measureText(s2).width;                      // Width of s2 (pixels)
  var x0 = x-(w1+w2)/2;                                    // x-coordinate of the center
  alignText(s1,0,x0,y);                                    // Output normal text
  alignText(s2,0,x0+w1+1,y+5);                             // Output index
  }
  
// Drawing for elongation:
// Diagram for time dependency of elongation, circular arc for elongation, numerical values

function drawElongation () {
  var sMax = l*alpha0;                                     // Maximaler Betrag der Elongation (m)
  var s = sMax*cosPhi;                        // Momentaner Wert der Elongation (m) 
  diagram(1,xD,yD1,sMax);                                  // Diagramm zeichnen
  alignText(symbolElongation,1,xD-25,yD1-130);             // Beschriftung (Symbol für Elongation)
  alignText(text22,1,xD-25,yD1-118);                       // Beschriftung (Einheit m)
  ctx.beginPath();                                         // Neuer Pfad
  ctx.lineWidth = 3;                                       // Liniendicke
  ctx.strokeStyle = colorElongation;                       // Farbe für Kreisbogen
  var pos = (alpha >= 0);                                  // Flag für Auslenkung nach rechts
  var w0 = (pos ? Math.PI/2 : Math.PI/2-alpha);            // Startwinkel für Kreisbogen (Bogenmaß)
  var w1 = (pos ? Math.PI/2-alpha : Math.PI/2);            // Endwinkel für Kreisbogen (Bogenmaß)
  ctx.arc(ax,ay,lPix,w0,w1,true);                          // Kreisbogen vorbereiten
  ctx.stroke();                                            // Kreisbogen zeichnen
  // drawMomVal(s,xD,yD1,colorElongation);                    // Momentanen Wert im Diagramm markieren 
  ctx.fillStyle = colorElongation;                         // Farbe für Elongation (Zahlenwerte)  
  // writeValue(text14,s,meterUnicode,3,xD,xD+110,height-140); // Momentanen Wert angeben
  // writeValue("("+text13,t,meterUnicode+")",3,xD,xD+110,height-120); // Maximalen Wert angeben
  }
  
// drawing for speed:
// Diagram for time dependence of speed, arrow for speed vector, numerical values

function drawVelocity () {
  var vMax = l*alpha0*omega;                               // Maximum amount of speed (m / s)
  var v = -vMax*sinPhi;                                    // Current value of the speed (m / s)
  diagram(2,xD,yD1,vMax);                                  // Draw a diagram
  alignText(symbolVelocity,1,xD-28,yD1-130);               // Lettering (symbol for speed)
  alignText(text23,1,xD-28,yD1-118);                       // Labeling (unit m / s)
  ctx.strokeStyle = colorVelocity;                         // Color for speed
  arrowPendulum(v*yPix,alpha0*cosPhi);                     // Vector arrow for speed
  // drawMomVal(v,xD,yD1);                                    // Mark the current value in the diagram
  ctx.fillStyle = colorVelocity;                           // Color for speed (numerical values)    
  // writeValue(text15,v,meterPerSecond,3,xD,xD+110,height-140);   // Specify the current value
  // writeValue("("+text13,vMax,meterPerSecond+")",3,xD,xD+110,height-120);  // Specify the maximum value
  }
  
// Drawing for tangential acceleration:
// Diagram for time dependency of acceleration, arrow for acceleration vector, numerical values
  
function drawAcceleration () {
  var aMax = l*alpha0*omega*omega;                         // Maximum amount of tangential acceleration (m / s²)
  var a = -aMax*cosPhi;                                    // Current value of the tangential acceleration (m / s²)
  diagram(3,xD,yD1,aMax);                                  // Draw a diagram
  centerTextIndex(symbolAcceleration,symbolTangential,xD-30,yD1-130);     // Labeling (symbol for tangential acceleration)
  alignText(text24,1,xD-30,yD1-113);                       // Labeling (unit m / s²)
  ctx.strokeStyle = colorAcceleration;                     // Color for acceleration
  arrowPendulum(a*yPix,alpha0*cosPhi);                     // Vector arrow for tangential acceleration
  // drawMomVal(a,xD,yD1);                                    // Mark the current value in the diagram
  ctx.fillStyle = colorAcceleration;                       // Color for acceleration (numerical values) 
  var mps2 = meterPerSecond2Unicode;   
  // writeValue(text16,a,mps2,3,xD-30,xD+110,height-140);    // Specify the current value
  // writeValue(text13,aMax,mps2,3,xD-30,xD+110,height-120);// Specify the maximum value
  }


// Graphics output:
// Seiteneffekt t, tU, phi, sinPhi, cosPhi, alpha, sinAlpha, cosAlpha, px, py
  
function paint () {
  ctx.fillStyle = colorBackground;                         // Background color
  ctx.fillRect(0,0,width,height);                          // Fill in the background
  rectangle(ax-50,ay-5,100,5,"#000000");                   // Suspension (ceiling)
  if (on) {                                                // If animation is switched on ...
    var t1 = new Date();                                   // ... Current time
    var dt = (t1-t0)/1000;                                 // ... length of the time interval (s)
    if (slow) dt /= 10;                                    // ... If slow motion, divide the time interval by 10
    t += dt;                                               // ... update time variable
    t0 = t1;                                               // ... New starting point
    }
  tU = (t<5 ? 0 : t-5);                                    // Time for diagram origin (s)
  phi = omega*t;                                           // Phase angle (radians) 
  sinPhi = Math.sin(phi); cosPhi = Math.cos(phi);          // Trigonometric values
  pendulum();                                              // Draw the pendulum
  clock(ax,340);                                           // Draw digital clock
  switch (nrSize) {                                        // Depending on the size considered ...
    case 0: drawElongation(); break;        // ... drawing for elongation
    case 1: drawVelocity(); break;             // ... drawing on speed
    case 2: drawAcceleration(); break;                // ... drawing of the tangential acceleration
    case 3: drawForce(); break;                            // ... drawing of the tangential force
    case 4: drawEnergy(); break;                           // ... drawing on energy
    }
  var s = text27+":  "+tPer.toPrecision(3)+" "+second;     // Character string for the period of oscillation
  var fr = text51+": "+omega.toPrecision(4)+" "+radsec;
  var fh = text51+": "+(1/tPer).toPrecision(4)+" "+hertz;
  s = s.replace(".",decimalSeparator);                     // Possibly a comma instead of a period
  ctx.fillStyle = "#000000";                               // Color for text
  alignText(s,1,ax,height-120);                            // Output character string for period of oscillation
  alignText(fh,1,ax,height-100);
  alignText(fr,1,ax,height-80);
  }
  
document.addEventListener("DOMContentLoaded",start,false); // Call Start Method after the page has loaded
