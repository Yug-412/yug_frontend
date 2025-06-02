function add(){
  const adddata=document.createElement("li");
  const uldata=document.getElementById('uldata');
  uldata.appendChild(adddata)
  adddata.innerText=document.getElementById('inputdata').value
  document.getElementById('inputdata').value=""
  delbutton(adddata);
}
function delbutton(adddata){
const delbtn= document.createElement("button");
adddata.appendChild(delbtn);
delbtn.innerHTML="delete"
delbtn.onclick = function(){
  adddata.remove();
}
}













// function deleteTask(adddata) {
//   const deletebtn = document.createElement("button");
//   deletebtn.innerHTML = "delete";
//   adddata.appendChild(deletebtn);
//   deletebtn.onclick = function () {
//     adddata.remove();
//   };
// }









//  const adddata = document.createElement("li");
//     const tasklist = document.getElementById("tasklist");
//     tasklist.appendChild(adddata);
//     adddata.innerHTML = document.getElementById("inputdata").value;
//     document.getElementById("inputdata").value = "";
//     deleteTask(adddata);