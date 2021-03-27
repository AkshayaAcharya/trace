let colleges = "";
let developers = "";
let breadcrumb = "";
let selectedIndex = "";
function institutes(){
  colleges = "";
    data.forEach((exp, index)=>{
        colleges+=`<div class="card col-md-2" style="margin: 15px">
        <div class="card-body">
        <h5 class="card-title">${exp.name}</h5>
          <div class="card-content">    
            <div class="card-content">
            <a class="btn btn-primary" href="#" class="card-link" onclick="displaySimulator('${exp.path}','${exp.name}')">Click Here</a>
            </div>
          </div>
        </div>
      </div>`
    })
    document.getElementById("college").innerHTML = colleges;
}





function displaySimulator(path,name){
  document.getElementById("simulator").style.visibility = "visible";
  window.location.href="#simulator";
  document.getElementById("titleSimulator").innerHTML = name+ '<span class="btn btn-info" style="float: right; cursor: pointer" onclick="moveToTop()">Move Top</span>';
  document.getElementById("sim").src = path;
}

function moveToTop(){
  window.location.href="#title";
}
institutes();

