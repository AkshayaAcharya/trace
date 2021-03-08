html{
    display: flex;
}
body{
  bakcground-color:#FCFCFC;
}
canvas{
    margin-left: 5em;
  margin-top: 16pt;
    border-radius: 16pt;
    z-index: 4;
    cursor: pointer;
    box-shadow: 0 13px 16px rgba(0, 0, 0, 0.5);
}
@media(max-width:768px){
  canvas{
    margin-left: 0;
    width:100vw;
  
  }
  .control{
    position: relative;
    top:50vh;
  }
}

body {
    background: white;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    color: #373737;
    line-height: 26px;
    text-align: left;
    overflow-x: hidden;
    margin: auto;
    width: 100%;
    outline: none;
}
.button{
    background-color: yellow;
    font-family: 'Montserrat', sans-serif;
    border: none;
    border-radius: 8pt;
    color: darkslategray;
    padding: 8pt;
    width: 60%;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 20pt;
    margin: 5px auto;
    z-index: 5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    height: 60px;
}
.button:hover{
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    width: 62%;
    height: 62px;
    color:#FCFCFC;
}
.input{
    display: block;
}
.roundButton{
    background-color: yellow;
    font-family: 'Montserrat', sans-serif;
    border: none;
    border-radius: 8pt;
    color: darkslategray;
    padding: 8pt;
    width:  100px;
    height: 100px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 24pt;
    margin: 5px auto;
    z-index: 5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    cursor: pointer;
}
.roundButton:hover{
    box-shadow: 0 13px 16px rgba(0, 0, 0, 0.5);
    color:#FCFCFC;
}
.control{
    right: 10px;
    position: absolute;
    width: 22vw;
    height: 540px;
    margin: 16pt 5em;
    color: #d8d8d8;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    min-height: 144pt;
    background-color: darkslategray;
    padding: 16pt;
    border-radius: 16pt;
    font-size: 18pt;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 4;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
}
.control:hover{
    box-shadow: 0 13px 16px rgba(0, 0, 0, 0.5);
}


select{
border: 0;
    font-weight: bold;
    *width: 350px;
    background-color: whitesmoke;
    -webkit-appearance: none;
    font-family: 'Montserrat', sans-serif;
    border: none;
    border-radius: 8pt;
    color: darkslategray;
    padding: 8pt;
    width: 60%;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 24pt;
    margin: 5px auto;
    z-index: 5;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    height: 60px;
}
select:hover{
    box-shadow: 0 13px 16px rgba(0, 0, 0, 0.5);
    width: 340px;
    height: 60px;

}





input[type=range] {
-webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
}
input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
}
input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
}
input[type=range]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
    background: #3071a9;
}
input[type=range]:focus::-ms-fill-upper {
    background: #367ebd;
}


output{
    color: #f4dd11;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
}


.checkbox {
    position: relative;
    top: -0.375rem;
    margin: 0 1rem 0 0;
    cursor: pointer;
}
.checkbox:before {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    border: 2px solid #f2f2f2;
}
.checkbox:checked:before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: .5rem;
    border-color: #009688;
    border-top-style: none;
    border-right-style: none;
}
.checkbox:after {
    content: "";
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
    background: inherit;
    cursor: pointer;
}
a{color: white;}
hr{border-top: 1; border-bottom: 1}
