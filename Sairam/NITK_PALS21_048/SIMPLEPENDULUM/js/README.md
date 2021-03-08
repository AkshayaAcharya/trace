# **Javascript**

---

```
let suspensionLength = document.querySelector("#length");
let pendulumWeight = document.querySelector("#pendulum-weight");
let wire = document.querySelector("#wire");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timePeriod = document.querySelector("#time-period");
let naturalFrequencyRad = document.querySelector("#natural-frequency-rad");
let naturalFrequencyHz = document.querySelector("#natural-frequency-hz");
let pendulumWave = document.querySelector("#pendulum-wave");
```

**document.querySelector()** method returns the first element that matches a specified CSS selector(s) in the document.The _suspensionLength , pendulumWeight , wire , start , stop, timePeriod, naturalFrequencyRad, naturalFrequencyHz, pendulumWave_ variables are declared above.

```
length = 100;
T = 2 * Math.PI * Math.sqrt(length / 9.8);
timePeriod.innerHTML = `${T.toFixed(4)} sec`;
naturalFrequencyHz.innerHTML = `${(1 / T).toFixed(4)} Hz`;
naturalFrequencyRad.innerHTML = `${((1 / T) * 6.283185).toFixed(4)} rad/s`;
pendulumWave.src = `./images/l${length}.png`;

```

For the variable **Length**, _100_ is assigned. The innerHTML is a property of a element that allows you to get or set the HTML markup contained within the element and also it allows you to read & modify.

```

suspensionLength.addEventListener("change", (event) => {
  if (length == 200 && event.target.value < 200) {
    length = 180;
    suspensionLength.value = 180;
  } else if (length == 180 && event.target.value < 180) {
    length = 160;
    suspensionLength.value = 160;
  } else if (length == 160 && event.target.value < 160) {
    length = 140;
    suspensionLength.value = 140;
  } else if (length == 140 && event.target.value < 140) {
    length = 120;
    suspensionLength.value = 120;
  } else if (length == 120 && event.target.value < 120) {
    length = 100;
    suspensionLength.value = 100;
  } else if (event.target.value > 180) {
    length = 200;
    suspensionLength.value = 200;
  } else if (event.target.value > 160) {
    length = 180;
    suspensionLength.value = 180;
  } else if (event.target.value > 140) {
    length = 160;
    suspensionLength.value = 160;
  } else if (event.target.value > 120) {
    length = 140;
    suspensionLength.value = 140;
  } else if (event.target.value > 100) {
    length = 120;
    suspensionLength.value = 120;
  } else {
    length = 100;
    suspensionLength.value = 100;
  }
```

To the **suspensionLength** variable ,the addEventListener method is attached to change event.  
If the _length == 200 && event.target.value < 200_ then the change will be _length = 180_, _suspensionLength.value = 180_.  
If the _length == 180 && event.target.value < 180_ then the change will be _length = 160_, _suspensionLength.value = 160_.  
If the _length == 160 && event.target.value < 160_ then the change will be _length = 140_, _suspensionLength.value = 140_.  
If the _length == 140 && event.target.value < 140_ _length = 120_, _suspensionLength.value = 120_.  
If the _length == 120 && event.target.value < 120_ then the change will be _length = 100_ ,_suspensionLength.value = 100_.  
If the _event.target.value > 180_ then the change will be _length = 200, suspensionLength.value = 200_.  
If the _event.target.value > 160_ then the change will be _length = 180, suspensionLength.value = 180_.  
If the _event.target.value > 140_ then the change will be _length = 160, suspensionLength.value = 160_.  
If the _event.target.value > 120_ then the change will be _length = 140, suspensionLength.value = 140_.  
If the _event.target.value > 100_ then the chnage will be _length = 120, suspensionLength.value = 120_.  
Otherwise the change will be length = 100 , suspensionLength.value = 100.

```
length = 100;
T = 2 * Math.PI * Math.sqrt(length / 9.8);
timePeriod.innerHTML = `${T.toFixed(4)} sec`;
naturalFrequencyHz.innerHTML = `${(1 / T).toFixed(4)} Hz`;
naturalFrequencyRad.innerHTML = `${((1 / T) * 6.283185).toFixed(4)} rad/s`;
pendulumWave.src = `./images/l${length}.png`;

```

In this above code, **length** is assigned to 100. The Time Period is found using the below formula,  
Time Period (T) = **2π√(l/g)**,  
Where, **l** is length of wire & g is accleration due to gravity.

The natural frequency in Hertz is obtained using the below formula,  
Natural Frequency(Hz) = **1/T** (reciprocal of Time period).  
The natural frequency in rad/s is obtained using the below formula,  
Natural Frequency(rad/s) = **Natural Frequency(Hz) X 6.283185**.

```
let pendulumKeyframe = `
  @keyframes oscilate${length} {
    0% {
      transform: rotate(30deg) translateX(${2 * length}px) rotate(30deg);
    }
    50% {
      transform: rotate(150deg) translateX(${2 * length}px) rotate(-135deg);
    }
    100% {
      transform: rotate(30deg) translateX(${2 * length}px) rotate(30deg);
    }
  }

  `;
```

The **@keyframes** rule specifies the animation code. The Keyframe name used in this code is oscillate.  
If the length is **0%** then the pendulum rotates **30 deg**, translateX is to move the 2D object in X-axis for the given value and rotates **30 deg**.  
If the length is **50%** then the pendulum rotates **150 deg**, translateX is to move the 2D object in X-axis for the given value and rotates **-135 deg**.  
If the length is **100%**, the pendulum rotates **30 deg**, translateX is to move the 2D object in X-axis for the given value and rotates **30 deg**.

```
 let wireKeyframe = `
  @keyframes oscilate-wire${length} {
    0% {
      transform: rotateZ(45deg) rotate(80deg);
    }
    50% {
      transform: rotateZ(115deg) rotate(120deg);
    }
    100% {
      transform: rotateZ(45deg) rotate(80deg);
    }
  }
  `;
```

The **@keyframes** rule specifies the animation code. The keyframe name used in this code is oscilate-wire.  
If the length **0%**, The _rotateZ()_ function is used to rotate the shape or an object around the z-axis for **45 deg** and rotates **80 deg**.  
If the length is **50%**, rotates for **115 deg** around the z-axis and rotates **120 deg**.  
If the length is **100%**, rotates for **45 deg** around the z-zxis and rotates **80 deg**.

```
var pendulumStyle = document.createElement("style");
  pendulumStyle.type = "text/css";
  pendulumStyle.innerHTML = pendulumKeyframe;
```

A css file is created and named as pendulumStyle and styles already described called **pendulumKeyframe** is placed inside this file.

```
 var wireStyle = document.createElement("style");
  wireStyle.type = "text/css";
  wireStyle.innerHTML = wireKeyframe;
```

A css file is created and named as wirestyle and styles already described called **wireKeyframe** is placed inside this file.

```
stop.addEventListener("click", () => {
  pendulumWeight.style["animation-play-state"] = "paused";
  wire.style["animation-play-state"] = "paused";
  start.classList.add("btn-outline-dark");
  start.classList.remove("btn-dark");
  stop.classList.add("btn-dark");
  stop.classList.remove("btn-outline-dark");
});
```

To the variable **stop**, the addEventListener() method is attached to the click event. The **animation-play-state** property specifies whether the animation is running or paused. When the stop button is clicked **animation-play-state** property of pendulumWeight and wire is paused.

The below operation is performed to change the active button color,  
First _"btn-outline-dark"_ is added tothe start class and _"btn-dark"_ is removed from the **start** class.  
Then _"btn-dark"_ is added to stop classList and _"btn-outline-dark"_ is removed from the **stop** class

```
start.addEventListener("click", () => {
  pendulumWeight.style["animation-play-state"] = "running";
  wire.style["animation-play-state"] = "running";
  stop.classList.add("btn-outline-dark");
  stop.classList.remove("btn-dark");
  start.classList.add("btn-dark");
  start.classList.remove("btn-outline-dark");
});
```

To the variable **start**, the _addEventListener()_ method is attached to the click event. The animation-play-state property specifies whether the animation is running or paused.When the stop button is clicked animation-play-state property of pendulumWeight and wire state is updated to running.

The below operation is performed to change the active button color,  
First _"btn-outline-dark"_ is added to the stop class and _"btn-dark"_ is removed from the **stop** class.  
Then _"btn-dark"_ is added to start classList and _"btn-outline-dark"_ is removed from the **start** class
