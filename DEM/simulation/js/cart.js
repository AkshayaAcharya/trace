let controlOK = false;
let color = 1;
let map;
let symType = "str";
let updateOnce = false;
let settingsDescription = [
  {
    id: "clrRamp",
    heading: "Color Ramp",
    desc: "A grid and index are common in an atlas and on roadmaps. A grid represents a series of horizontal and vertical lines running across the map whereas index helps the map reader find a particular location by following the numbers and letters in the grid.",
  },
  {
    id: "symbology",
    heading: "Symbology",
    desc: "A grid and index are common in an atlas and on roadmaps. A grid represents a series of horizontal and vertical lines running across the map whereas index helps the map reader find a particular location by following the numbers and letters in the grid.",
  },
  {
    id: "newGrid",
    heading: "Grids",
    desc: "A grid and index are common in an atlas and on roadmaps. A grid represents a series of horizontal and vertical lines running across the map whereas index helps the map reader find a particular location by following the numbers and letters in the grid.",
  },
  {
    id: "northArrow",
    heading: "North Arrow",
    desc: "The purpose of the north arrow is for orientation. This enables the viewer to determine the map's direction in relation to the true north. Most maps tend to be oriented so that due north faces the top of the page. ",
  },
  {
    id: "mapTitle",
    heading: "Map Title",
    desc: "The title of a map is one of its vital features. The title is significant because it provides a concise description of the map's subject matter to the viewer right away.  ",
  },
  {
    id: "legend",
    heading: "Legend",
    desc: "The legend serves as the decoder for the symbology in the data frame. Therefore, it is also commonly known as the key. Descriptions detailing any colour schemata, symbology or categorization is explained here. ",
  },
  {
    id: "scaleBar",
    heading: "Scale Bar",
    desc: "The scale explains the relationship of the data frame extent to the real world. The description is a ratio. This can be shown either as a unit to unit or as one measurement to another measurement. Therefore a scale showing a 1:10,000 scale means that every one paper map unit represents 10,000 real-world units.",
  },
];

let settingsControl = [
  { id: "clrRamp", clicked: false },
  { id: "symbology", clicked: false },
  { id: "northArrow", clicked: false },
  { id: "mapTitle", clicked: false },
  { id: "legend", clicked: false },
  { id: "scaleBar", clicked: false },
];

const goToMainPage = () => {
  document.getElementById("canvas0").style.visibility = "hidden";
  document.getElementById("canvas1").style.visibility = "visible";
  document.getElementById("nextButton").style.visibility = "hidden";
};

function showInfo(ele) {
  const found = settingsDescription.find(function (setting) {
    return setting.id === ele.parentNode.id;
  });
  found.visibility = true;
  if (found.visibility) {
    document.getElementById("tooltiptext").style.visibility = "visible";
    document.getElementById(
      "tooltiptext"
    ).innerHTML = `<h3>${found.heading}</h3><p>${found.desc}</p> 
    `;
  } else {
    document.getElementById("tooltiptext").style.visibility = "hidden";
  }
}

function hideInfo(ele) {
  const found = settingsDescription.find(function (setting) {
    return setting.id === ele.parentNode.id;
  });
  found.visibility = false;
  document.getElementById("tooltiptext").style.visibility = found.visibility
    ? "visible"
    : "hidden";
}

function showPopup(ele) {
  document.getElementById("parentPopup").style.display = "block";
  displayOptions(ele);
}

function closeModal(ev) {
  if (
    ev.target.className == "parentPopup" ||
    ev.target.className == "close" ||
    ev.target.className == "cancel" ||
    controlOK
  ) {
    controlOK = false;
    document.getElementById("parentPopup").style.display = "none";
  }
}

function displayOptions(ele) {
  if (ele.id == "map") {
    selectMap();
  }
  if (ele.id == "clrRamp") {
    selectColorRamp();
  }
  if (ele.id == "symbology") {
    chooseSymbologyType();
  }
}

function selectMap() {
  document.getElementById("popUpContent").innerHTML = `
  <div  class="heading">
    <p class="optTitle">Choose Map <span class="close"
    onclick="closeModal(event);">&#10006;</span></p>
  </div>
  <div class="colorContent">
    <div class="flex-container">
      <div class="flexTitle" style="padding: 5px"  id="color1""><span>Mangaluru</span></div>  
      <div class="flexTitle" style="padding: 5px"  id="color2""><span>Bengaluru</div>  
    </div>
  <div class="colorContent">
    <div class="flex-container">
      <div class="flexImg" style="padding: 5px"  id="m1" onclick="setMap(this,true)"><span><img src="./images/strm1.png" " width=200/></span></div>  
      <div class="flexImg" style="padding: 5px"  id="b1" onclick="setMap(this,true)"><span><img src="./images/strb1.png" width=200/></span></div>  
    </div>
  </div>
  `;
}

function setMap(ele, update = false) {
  controlOK = true;

  if (update) {
    map = ele.id == "m1" ? "m" : "b";
    document.getElementById("mapImage").src = "./images/str" + ele.id + ".png";
    updateOnce = true;
    enableOnEventOver("symbology", showPopup);
    enableOnEventOver("clrRamp", showPopup);
  } else {
    document.getElementById("mapImage").src = "./images/" + ele + ".png";
  }
  updateDescription();
}

function selectColorRamp() {
  document.getElementById("popUpContent").innerHTML = `
  <div  class="heading">
    <p class="optTitle">Select Color Ramp <span class="close"
    onclick="closeModal(event);">&#10006;</span></p>
  </div>
  <div class="colorContent">
    <div class="flex-container">
      <div class="flexImg" style="padding: 5px"  id="color1" onclick="selectColor(this)"><span><img src="./images/c1.png" "/></span></div>  
      <div class="flexImg" style="padding: 5px"  id="color2" onclick="selectColor(this)"><span><img src="./images/c2.png" /></span></div>  
      <div class="flexImg" style="padding: 5px" id="color3" onclick="selectColor(this)"><span><img src="./images/c3.png" /></span></div>  
    </div>
  </div>
  `;
}

function selectColor(ele) {
  if (ele.id == "color1") {
    color = 1;
  } else if (ele.id == "color2") {
    color = 2;
  } else {
    color = 3;
  }
  let currentMap =
    symType == "cls" ? symType + map + color + color : symType + map + color;
  document.getElementById("mapImage").src = "./images/" + currentMap + ".png";
  controlOK = true;
}

function chooseSymbologyType() {
  document.getElementById("popUpContent").innerHTML = `
  <div  class="heading">
    <p class="optTitle">Choose Type of Symbology<span class="close"
    onclick="closeModal(event);">&#10006;</span></p>
  </div>
  <div class="colorContent">
    <div class="flex-container">
      <div class="flexTitle" style="padding: 5px"  id="color1""><input type="radio" value="classified" name="sym" onclick="selectMapType(this)" /><span>Classified</span></div>  
      <div class="flexTitle" style="padding: 5px"  id="color2""><input type="radio" value="stretched" name="sym" onclick="selectMapType(this)"/><span>Stretched</div>  
    </div>
  `;
}

function selectMapType(ele) {
  symType = ele.value == "classified" ? "cls" : "str";
  let modifiedMap =
    symType == "cls" ? symType + map + color + color : symType + map + color;
  setMap(modifiedMap);
  updateDescription();
}

function enableOnEventOver(id, callback) {
  settingsControl.filter(function (setting) {
    if (setting.id == id) {
      document.getElementById(id).classList.remove("lockSettings");
      document.getElementById(id).onclick = function () {
        callback(this);
      };
    }
  });
}

function disableOnEventOver(id) {
  settingsControl.filter(function (setting) {
    if (setting.id == id) {
      document.getElementById(id).classList.add("lockSettings");
      document.getElementById(id).onclick = "";
    }
  });
}

function updateDescription() {
  let mapName = map == "m" ? "Mangaluru" : "Bengaluru";
  let viewName = symType == "cls" ? "Classified" : "Stretched";
  document.getElementById("mapName").innerHTML = `
      <strong>Map</strong>: <span>${mapName}</span>`;
  document.getElementById("viewName").innerHTML = `
      <strong>View</strong>: <span>${viewName}</span>
    `;
}
