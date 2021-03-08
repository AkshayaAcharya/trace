let suspensionLength = document.querySelector("#length");
let pendulumWeight = document.querySelector("#pendulum-weight");
let wire = document.querySelector("#wire");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let timePeriod = document.querySelector("#time-period");
let naturalFrequencyRad = document.querySelector("#natural-frequency-rad");
let naturalFrequencyHz = document.querySelector("#natural-frequency-hz");
let pendulumWave = document.querySelector("#pendulum-wave");

length = 100;
T = 2 * Math.PI * Math.sqrt(length / 9.8);
timePeriod.innerHTML = `${T.toFixed(4)} sec`;
naturalFrequencyHz.innerHTML = `${(1 / T).toFixed(4)} Hz`;
naturalFrequencyRad.innerHTML = `${((1 / T) * 6.283185).toFixed(4)} rad/s`;
pendulumWave.src = `./images/l${length}.gif`;

const stopPendulum = () => {
  pendulumWeight.style["animation-play-state"] = "paused";
  wire.style["animation-play-state"] = "paused";
  start.classList.add("btn-outline-dark");
  start.classList.remove("btn-dark");
  stop.classList.add("btn-dark");
  stop.classList.remove("btn-outline-dark");
};

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

  timePeriod.innerHTML = `0.0000 sec`;
  naturalFrequencyHz.innerHTML = `0.0000 Hz`;
  naturalFrequencyRad.innerHTML = `0.0000 rad/s`;
  pendulumWave.src = `./images/l.png`;

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

  //   Pendulum Style Sheet
  var pendulumStyle = document.createElement("style");
  pendulumStyle.type = "text/css";
  pendulumStyle.innerHTML = pendulumKeyframe;

  //   Wire Style Sheet
  var wireStyle = document.createElement("style");
  wireStyle.type = "text/css";
  wireStyle.innerHTML = wireKeyframe;

  // Insert pendulum KeyFrame
  pendulumWeight.appendChild(pendulumStyle);
  pendulumWeight.style = `animation: oscilate${length} 3s infinite`;

  // Insert wire Style
  wire.appendChild(wireStyle);
  wire.style = `animation: oscilate-wire${length} 3s infinite;`;
  wire.style.top = `-${2 * length}px`;
  wire.style.height = `${4 * length}px`;

  stopPendulum();
});

stop.addEventListener("click", stopPendulum);

start.addEventListener("click", () => {
  pendulumWeight.style["animation-play-state"] = "running";
  wire.style["animation-play-state"] = "running";
  stop.classList.add("btn-outline-dark");
  stop.classList.remove("btn-dark");
  start.classList.add("btn-dark");
  start.classList.remove("btn-outline-dark");

  T = 2 * Math.PI * Math.sqrt(length / 9.8);
  timePeriod.innerHTML = `${T.toFixed(4)} sec`;
  naturalFrequencyHz.innerHTML = `${(1 / T).toFixed(4)} Hz`;
  naturalFrequencyRad.innerHTML = `${((1 / T) * 6.283185).toFixed(4)} rad/s`;
  pendulumWave.src = `./images/l${length}.gif`;
});
