**********************************************************************************************************
Pendulum Canvas Coordinate Manipulator/s
**********************************************************************************************************

w(x) 
This function takes width in percentage and gives the equivalent value in pixels.

h(y)
This function takes height in percentage and gives the equivalent value in pixels.

xCoordinate(l)
This takes in the length l and returns the length of the line’s image on X axis.

yCoordinate(l)
This takes in the length l and returns the length of the line’s image on Y axis.

**********************************************************************************************************
General Function/s
**********************************************************************************************************

disableInputs(bool)
This function takes in a Boolean and disables the input accordingly.

gravitySelector()
This function is triggered when the select input for gravity is used. This function assigns the gravity according to the input.

setButtons(ru, st, pa, re, ss)
This function takes in 5 Boolean values which alter the hidden state of run button, stop button, pause button, resume button and simulation speed slider.

updateSpeed()
This function is used to update the time increment variable according to the simulation speed selector, the function triggers whenever the change is made in the slider.

calculatePeriod()
This function calculates the time period frequency both in hertz and radians, and displays in the output.

**********************************************************************************************************
Pendulum Functions
**********************************************************************************************************

updatePendulum()
This function clears the screen/canvas and draws the pendulum.

**********************************************************************************************************
Chart Functions
**********************************************************************************************************

populateChart()
This function populates the chart with the all the Y coordinates for x=0 to time period and updates the chart.

updateChart()
This function adds 

**********************************************************************************************************
Simulation Controls
**********************************************************************************************************

runSimulation()
This function is called when the user clicks run. It calls gravitySelector to update gravity and calls calculatePeriod to calculate time period, populateChart, updates isRunning to true, calls setButtons, calls disableInputs and finally calls the simulate function.

simulate()
This function is used to simulate the moving graph and moving pendulum, this is done by incrementing time, update angle and call the functions updateChart and updatePendulum. 

pauseSimulation()
This function is used to pause the simulation. It updates isRunning to false, is false to true, and calls the setButtons.

resumeSimulation()
This function is used to resume the simulation. It updates isRunning to true, is false to false, calls the setButtons and calls simulate.
stopSimulation()
This function is used to stop the simulation and reset on the variables and simulation.

**********************************************************************************************************
Global Variables
**********************************************************************************************************

pi
Stores the Math.PI constant.

sin
Stores the Math.sin function.

cos
Stores the Math.cos function.

floor
Stores the Math.floor function.

g
Variable to store gravity.

length
Variable to store length of pendulum in meter.

timePeriod
Variable to store time period.

time
Variable to store simulation time.

timeIncrement
Variable to store the time increment value.

simSpeed
Variable to store the simulation speed.

frequencyRad
Variable to store angular frequency.

ctx
Variable to store the chart context.

chart
Variable to store the Chart object (chart.js).

req
Variable to store the simulation instance.

isRunning
Variable to store Boolean for running simulation.

isPaused
Variable to store Boolean for paused simulation.

c
Variable to store pendulum context.

canvas
Variable to store the pendulum canvas.

bobRadius
Variable to store the pendulum bob radius in px.

heightFromTop
Variable to store the string length in %.

pivot
Variable to store the pivot distance from left of canvas in %.

theta
Variable to store the current angle of the pendulum.

thetaMax
Variable to store the maximum angle that could be reached by the pendulum.