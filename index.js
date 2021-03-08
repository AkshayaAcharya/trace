let colleges = "";
let developers = "";
let breadcrumb = "";
let selectedIndex = "";
function institutes(){
  colleges = "";
  developers="";
    breadcrumb=`<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active"><a href=""  aria-current="page" onclick="institutes()">INSTITUTES</a></li>
    </ol>
  </nav>`
    data.forEach((college, index)=>{
        colleges+=`<div class="card col-md-2" style="margin: 15px">
        <div class="card-body">
        <h5 class="card-title">${college.name}</h5>
        <p>Submission Count: <b style="color: red">${college.developer.length}</b></p>
          <div class="card-content">    
            <div class="card-content">
            <a class="btn btn-primary" href="#" class="card-link" onclick="displayColleges(${index})">Click Here</a>
            </div>
          </div>
        </div>
      </div>`
    })
    document.getElementById("nav").innerHTML = breadcrumb;
    document.getElementById("college").innerHTML = colleges;
}



function displayColleges(index){
  developers="";
    selectedIndex = index
    let branchList = data[index].developer;
    breadcrumb=`<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="" onclick="institutes()">INSTITUTES</a></li>
        <li class="breadcrumb-item active"><a href="#"   aria-current="page" onclick="displayColleges(${index})">${data[index].name}</a></li>
        </ol>
    </nav>`
    branchList.forEach((branch, index)=>{
        developers+=`<div class="card col-md-3" style="margin: 15px">
        <div class="card-body">
          <h5 class="card-title">ID: <span  style="color: red">${branch.id}</span></h5>
          <div class="card-content">    
            <div class="card-content">
            <p>Branch: <b style="color: blue">${branch.name}</b></p>
            <a class="btn btn-primary" href="#endDiv" class="card-link" onclick="displaySimulator(${index}, '${branch.path}','${branch.id}', '${branch.name}')">Click Here</a>
            </div>
          </div>
        </div>
      </div>`
    });
    document.getElementById("nav").innerHTML = breadcrumb;
    document.getElementById("college").innerHTML = developers;

}

function displaySimulator(index,path,id, name){
  document.getElementById("simulator").style.visibility = "visible";
  window.location.href="#simulator";
  document.getElementById("titleSimulator").innerHTML = name+ ": "+id+'<span class="btn btn-info" style="float: right; cursor: pointer" onclick="moveToTop()">Move Top</span>';
  document.getElementById("sim").src = path;
}

function moveToTop(){
  window.location.href="#title";
}
institutes();

