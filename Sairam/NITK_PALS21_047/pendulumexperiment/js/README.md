1. changeWidthHeight() => changes the size of the canvas dynamically based on the window size



2. sketch() => this function creates a simualtion object for the entire simulation process.
            Inside this function setup() & draw() functions are defined,that are used to do simulation.



3. setup() => This Function create a initial setup required for the simulation like setting up a canvas size and its position etc.



4. draw() => This function is used to draw the simulation object.
          It draws a string of given length with a bob attached to it.



5. change_btn() => This function is used to change the length of the pendulum string with the value entered in the input field.



6. start_btn() => This function will set simulate variable to true and starts the simulation of the pendulum and the timer starts to calculate seconds.



7. stop_btn() => This function will set simulate variable to false and gets the timer value and do calculation to get frequency values, then it displays that value in the html tag.