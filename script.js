const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.querySelector('#search')


// define more constants and variables here

btn_toggle.onclick = () => {
  const y = "640631102 PANNAWIT PANWONG"
  const x = 640631102+parseInt(length.value)
  
  if(btn_toggle.innerHTML == "Show Author"){
    author.innerHTML = y
    btn_toggle.innerHTML = "Show Calculation"
  }else{
    author.innerHTML = x
  btn_toggle.innerHTML = "Show Author"
  }
  //x.innerHTML = "xxx"
  //const h2 = document.createElement('h2')
  //h2.innerHTML = x
}
search.onclick = () => {
  var a = document.getElementById("text").innerHTML
  console.log(a)
  // var length = document.getElementById("length").value
  // const myArr = text.split(" ")
  // var stringOut = ""
  // for( let i = 0; i < myArr.length; i++){
  //   if(myArr[i].length >= length){
  //     stringOut += "<mark>" + myArr[i] + "</mark>"
  //   }
  //   else{
  //     stringOut += myArr[i] + " ";
  //   }
  // }
  // document.getElementById("text").innerHTML = stringOut;
}
// more codes for Search and Reset buttons here
