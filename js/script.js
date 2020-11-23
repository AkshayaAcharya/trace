let breadcrumbString='';
let universityString = '';
let universityIndex ;
let streamIndex ;
getUniversities();
function getUniversities() {
    universityString = '';
    breadcrumbString=`<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Universities</li>
        </ol> 
    </nav>`;
    document.getElementById("navList").innerHTML = breadcrumbString;
    document.getElementById("universities").innerHTML = '';
    universities.forEach((university, index)=>{
        universityString+=`<div class="col-md-6" style="padding-top: 20px">
        <div class="card">
          <div class="card-body">
            <div style="word-wrap: break-word"><h5 class="card-title" >${university.name}</h5></div>
            <p class="card-text" style=" width: 100%;">${university.title}</p>
            <a href="#" class="btn btn-primary" onclick="showStreams(${index})">Click Here</a>
          </div>
        </div>
      </div>`
    });
    document.getElementById("universities").innerHTML = universityString;
    document.getElementById("selectName").innerHTML = "Universities";
}


function showStreams(index){
    universityIndex = index;
    let streamString = " ";
    breadcrumbString=`<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="javascript:getUniversities()">Universities</a></li>
      <li class="breadcrumb-item active" aria-current="page">Streams</li>
    </ol> 
  </nav>`;
  document.getElementById("navList").innerHTML = breadcrumbString;
    document.getElementById("universities").innerHTML = '';
    let streams = universities[index].streams;
    streams.forEach((stream, index )=> {
        streamString+=`<div class="col-md-6" style="padding-top: 20px">
            <div class="card">
            <div class="card-body" >
                <h5 class="card-title">${stream.name}</h5>
                
                <a href="#" class="btn btn-primary" onclick="showLabs(${index})">Click Here</a>
            </div>
            </div>
        </div>`
        document.getElementById("selectName").innerHTML = `${universities[index].title}`;

    })
    document.getElementById("universities").innerHTML = streamString;
    

}
// overflow-y: auto;text-align: left;
let labString = " ";
function showLabs(index){
    streamIndex = index;
    let labList = universities[universityIndex].streams[streamIndex].labs;
    breadcrumbString=`<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="javascript:getUniversities()">Universities</a></li>
      <li class="breadcrumb-item active"><a href="javascript:showStreams(universityIndex)">Streams</a></li>
      <li class="breadcrumb-item active" aria-current="page">Subjects</li>
    </ol> 
  </nav>`;
  document.getElementById("navList").innerHTML = breadcrumbString;
    document.getElementById("universities").innerHTML = '';
    labString='';
    labList.forEach((lab, index )=> {
        labString+=` <div class="col mb-4" style="padding-top: 20px">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title p-0">${lab.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Developer PIC: ${lab.institute}</h6>
        <p class="card-text">Subject Code: ${lab.code}</p>
            <span class="pb-4"><a href="${lab.link}" class="btn btn-primary" target="_blank">Click Here</a></span>
        </div>
        </div>
      </div>
      `
        document.getElementById("selectName").innerHTML = `${universities[universityIndex].streams[streamIndex].name}`;
    })
    document.getElementById("universities").innerHTML = labString;
    
}